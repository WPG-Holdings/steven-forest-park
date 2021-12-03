import HeadMeta from '@/container/HeadMeta';
import React, { useContext, useState, useEffect } from 'react';
import api from '@/api';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import IconSvg from '@/components/IconSvg';
import Menu from '@material-ui/core//Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InfiniteScroll from '@/components/InfiniteScroll';
import SearchListItem from './listItem';
import { retryFailedRequest } from '@/api/instances';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '500px',
  hight: '80%',
  width: '90%',
  backgroundColor: '#F2F0EB',
  boxShadow: 24,
  p: 4,
};

const teamTagList = [
  'ITU1',
  'ITU3-Flow',
  'ITU5-B2B',
  'ITU6-WMS/LGS',
  'ITU5-大大邦/購',
  'DSU-訂單辨識',
  'ITU9-CHT',
  'ITU3-Java',
  'ITU3-BI',
  'ITU9-ITU9',
  'ITU8',
  'ITU7',
  'ITU6-LaaS',
  'ITU5-大大通/頻',
  'ITU6-WmsRS',
];

const systemTagList = [
  'erp',
  'webflow',
  '大大邦',
  'wms',
  'b2b',
  'bi',
  'udl',
  'eip',
  'BpaaS',
  'lgs',
  'mt會議類',
  'nw網路類',
  'softphone類',
  'Outlook/Mail相關',
  'others',
  'discover',
  '大大通',
  'x',
  'MFA',
  'Mobile',
  'dts',
  'hw硬體類-電腦類',
  'oa總務類',
  'Office',
  'apps',
  'emaker',
  'sw軟體類',
  '大大購',
];

const Search = (props) => {
  const router = useRouter();

  const [queryString, setQueryString] = useState(router.query.q);
  const [selecedTeamTag, setSelecedTeamTag] = useState(router.query.team);
  const [selecedSysTag, setSelecedSysTag] = useState(router.query.sys);

  const handleSearch = (queryString) => {
    try {
      router.push({
        pathname: '/search',
        query: { q: queryString },
      });
    } catch (error) {
      console.log('handleSearch -> error', error);
    }
  };

  /* 無限下拉 start */
  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [errorCode, setErrorCode] = useState(0);
  const [isReloading, setIsReloading] = useState(false);

  const nextPageNum = pageNum + 1;

  const endHandler = () => {
    setHasMore(false);
    setIsEnd(true);
  };

  const successHandler = (nextData) => {
    setMainData((prevData) => prevData.concat(nextData));
    setPageNum(nextPageNum);
  };

  const initDataHandler = (queryString, selecedTeamTag, selecedSysTag) => {
    if (!queryString) {
      endHandler();
      return;
    }
    (async () => {
      setIsLoading(true);
      try {
        let searchResult;
        if (selecedTeamTag && selecedSysTag) {
          searchResult = await api.search.postSearchQuery({
            page: 1,
            question: queryString,
            sys: selecedSysTag,
            team: selecedTeamTag,
          });
        } else if (selecedTeamTag) {
          searchResult = await api.search.postSearchQuery({
            page: 1,
            question: queryString,
            team: selecedTeamTag,
          });
        } else if (selecedSysTag) {
          searchResult = await api.search.postSearchQuery({
            page: 1,
            question: queryString,
            sys: selecedSysTag,
          });
        } else {
          searchResult = await api.search.postSearchQuery({
            page: 1,
            question: queryString,
          });
        }

        if (searchResult.data.searchHits) {
          setMainData(searchResult.data.searchHits);
        } else {
          setMainData([]);
          setHasMore(false);
          setIsEnd(true);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    })();
    setPageNum(1);
    setHasMore(true);
    setIsEnd(false);
  };

  useEffect(() => {
    const initQueryString = router.query.q;
    const initTeamTag = router.query.team;
    const initSysTag = router.query.sys;
    setQueryString(initQueryString);
    setSelecedTeamTag(initTeamTag);
    setSelecedSysTag(initSysTag);
    initDataHandler(initQueryString, initTeamTag, initSysTag);
  }, [router]);

  const fetchMoreData = async () => {
    if (errorCode !== 0) setIsReloading(true);
    const showLoadMore = nextPageNum === 2;
    // 第三頁的資料由 loadmore 載入
    if (nextPageNum === 3) return;

    try {
      let nextMainData;
      if (selecedTeamTag && selecedSysTag) {
        nextMainData = await api.search.postSearchQuery({
          page: pageNum,
          question: queryString,
          sys: selecedSysTag,
          team: selecedTeamTag,
        });
      } else if (selecedTeamTag) {
        nextMainData = await api.search.postSearchQuery({
          page: pageNum,
          question: queryString,
          team: selecedTeamTag,
        });
      } else if (selecedSysTag) {
        nextMainData = await api.search.postSearchQuery({
          page: pageNum,
          question: queryString,
          sys: selecedSysTag,
        });
      } else {
        nextMainData = await api.search.postSearchQuery({
          page: pageNum,
          question: queryString,
        });
      }

      showLoadMore ? setHasMore(false) : setHasMore(true);
      if (!nextMainData.data.searchHits.length) endHandler();
      else successHandler(nextMainData.data.searchHits);
    } catch (error) {
      setErrorCode(retryFailedRequest(error));
      setIsReloading(false);
      endHandler();
    }
  };

  const loadmore = () => {
    if (isEnd) return;
    setHasMore(true);
    setIsEnd(false);

    (async () => {
      try {
        let nextMainData;
        if (selecedTeamTag && selecedSysTag) {
          nextMainData = await api.search.postSearchQuery({
            page: pageNum,
            question: queryString,
            sys: selecedSysTag,
            team: selecedTeamTag,
          });
        } else if (selecedTeamTag) {
          nextMainData = await api.search.postSearchQuery({
            page: pageNum,
            question: queryString,
            team: selecedTeamTag,
          });
        } else if (selecedSysTag) {
          nextMainData = await api.search.postSearchQuery({
            page: pageNum,
            question: queryString,
            sys: selecedSysTag,
          });
        } else {
          nextMainData = await api.search.postSearchQuery({
            page: pageNum,
            question: queryString,
          });
        }

        if (!nextMainData.data.searchHits.length) endHandler();
        else successHandler(nextMainData.data.searchHits);
      } catch (error) {
        setErrorCode(retryFailedRequest(error));
        endHandler();
      }
    })();
  };

  /* 無限下拉 end */

  /*進階篩選 start*/
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onTeamTagClick = (teamTag) => {
    setSelecedTeamTag(teamTag);
  };

  const onSysTagClick = (sysTag) => {
    setSelecedSysTag(sysTag);
  };

  const handleClearClick = () => {
    setSelecedTeamTag([]);
    setSelecedSysTag([]);
  };

  const handleComfirmClick = async () => {
    const teamLength = selecedTeamTag && selecedTeamTag.length > 0;
    const sysLength = selecedSysTag && selecedSysTag.length > 0;

    try {
      if (sysLength && teamLength) {
        const filterResult = await api.search.postSearchQuery({
          page: 1,
          question: queryString,
          sys: selecedSysTag,
          team: selecedTeamTag,
        });
        if (filterResult.data.searchHits) {
          setMainData(filterResult.data.searchHits);

          router.push({
            pathname: '/search',
            query: { q: queryString, team: selecedTeamTag, sys: selecedSysTag },
          });
        }
      } else if (teamLength) {
        const filterResult = await api.search.postSearchQuery({
          page: 1,
          question: queryString,
          team: selecedTeamTag,
        });
        if (filterResult.data.searchHits) {
          setMainData(filterResult.data.searchHits);

          router.push({
            pathname: '/search',
            query: { q: queryString, team: selecedTeamTag },
          });
        }
      } else if (sysLength) {
        const filterResult = await api.search.postSearchQuery({
          page: 1,
          question: queryString,
          sys: selecedSysTag,
        });
        if (filterResult.data.searchHits) {
          setMainData(filterResult.data.searchHits);

          router.push({
            pathname: '/search',
            query: { q: queryString, sys: selecedSysTag },
          });
        }
      } else {
        router.push({
          pathname: '/search',
          query: { q: queryString },
        });
      }
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const AdvancedFilterDialog = () => {
    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <button className="close-btn button" onClick={handleClose}>
              X
            </button>
            <div className="tag-section">
              <div className="team-tag-list">
                <div className="tag-title">部門</div>
                <ul>
                  {teamTagList.map((item) => (
                    <li
                      className={clsx('team-tag tag button', {
                        isSelected: selecedTeamTag === item,
                      })}
                      onClick={() => onTeamTagClick(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sys-tag-list">
                <div className="tag-title">平台</div>
                <ul>
                  {systemTagList.map((item) => (
                    <li
                      className={clsx('sys-tag tag button', {
                        isSelected: selecedSysTag === item,
                      })}
                      onClick={() => onSysTagClick(item)}
                    >
                      <div className="tag-label">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bottom-button-row">
              <button className="button btn" onClick={handleComfirmClick}>
                確定
              </button>
              <button className="button btn" onClick={handleClearClick}>
                清除
              </button>
            </div>
          </Box>
        </Modal>

        <style jsx>{`
          .close-btn {
            position: absolute;
            top: 20px;
            right: 30px;
          }
          ul {
            list-style: none;
          }
          .tag-title {
            font-size: 18px;
            font-weight: bold;
            position: relative;
            left: 38px;
          }
          .tag {
            margin-bottom: 20px;
          }

          .tag-section {
            display: flex;
            .team-tag-list {
              ul {
                -webkit-column-count: 2;
                -moz-column-count: 2;
                column-count: 2;
              }
              .team-tag {
                &.isSelected {
                  font-weight: bold;
                  color: #005c9f;
                }
              }
            }
            .sys-tag-list {
              margin-left: 50px;
              ul {
                -webkit-column-count: 4;
                -moz-column-count: 4;
                column-count: 4;
              }
              .sys-tag {
                &.isSelected {
                  font-weight: bold;
                  color: #005c9f;
                }
              }
            }
          }
          .bottom-button-row {
            float: right;
            .btn {
              border: 1px #000 solid;
              padding: 5px 30px;
              margin-left: 20px;
              font-weight: bold;
            }
          }
        `}</style>
      </>
    );
  };
  /*進階篩選 end*/

  const SearchListDOM = (() => {
    if (!mainData.length && !isLoading)
      return (
        <>
          <div className="no-result">
            <div className="message-container">
              <div className="message">
                <h1>抱歉，沒有找到相關資訊。</h1>
                <p className="sub-title">請嘗試其他搜尋條件。</p>
              </div>
            </div>
          </div>
          <style jsx>{`
            .no-result {
              .message-container {
                height: 100px;
                display: flex;
                margin: 20% 0;
                .message {
                  margin: auto 0;
                  text-align: left;
                }
              }
              .sub-title {
                font-size: 17px;
              }
            }
          `}</style>
        </>
      );
    return (
      <InfiniteScroll
        dataLength={mainData.length}
        fetchMoreData={fetchMoreData}
        loadmore={loadmore}
        hasMore={hasMore}
        setHasMore={setHasMore}
        isEnd={isEnd}
        setIsEnd={setIsEnd}
        endText={'--相關搜尋結果已結束--'}
        errorCode={errorCode}
        isReloading={isReloading}
      >
        {mainData.map((item, index) => {
          return (
            <SearchListItem
              key={index}
              titleId={item.content.title}
              question={item.content.question}
              processMethod={item.content.processMethod}
              systemTag={item.content.sys}
              teamTag={item.content.team}
              endTime={item.content.endTime}
              endFlag={item.content.endFlag}
            />
          );
        })}
      </InfiniteScroll>
    );
  })();

  return (
    <>
      <HeadMeta
        title={'OP Keywords - 搜尋'}
        description={'OP Keywords'}
        keywords={'OP Keywords'}
      />
      <div id="searchPage" className="search-page">
        <SearchBar
          onClickButton={initDataHandler}
          type={'secondary'}
          onHandleSearch={handleSearch}
          onChangeInput={setQueryString}
          queryString={queryString}
        />
        <div>
          <div className="button-row">
            <button className="button filter-btn" onClick={handleClickOpen}>
              進階篩選
              <IconSvg
                fill="none"
                stroke={'#000'}
                strokeWidth={1.5}
                size={20}
                type="Filter"
              />
            </button>
            <button className="button filter-btn">
              排序依據: 關聯度: 由高到低
              <IconSvg
                fill="none"
                stroke={'#000'}
                strokeWidth={1.5}
                size={16}
                type="ChevronDown"
              />
            </button>
          </div>
          <AdvancedFilterDialog />
        </div>
        <div>{SearchListDOM}</div>
      </div>
      <div></div>
      <style jsx>{`
        .search-page {
          padding: 0 10%;
          margin-top: 10px;
        }
        .button-row {
          position: relative;
          left: 60%;
          display: flex;
          font-size: 14px;
          margin: 15px 0;
          .filter-btn {
            display: flex;
            font-weight: bold;
            margin-right: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Search;
