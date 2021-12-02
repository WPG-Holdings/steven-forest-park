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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const Search = (props) => {
  const router = useRouter();

  const [queryString, setQueryString] = useState(router.query.q);

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

  const initDataHandler = (queryString) => {
    if (!queryString) {
      endHandler();
      return;
    }
    (async () => {
      setIsLoading(true);
      try {
        const searchResult = await api.search.postSearchQuery({
          page: 1,
          question: queryString,
        });

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
    setQueryString(initQueryString);
    initDataHandler(initQueryString);
  }, [router]);

  const fetchMoreData = async () => {
    if (errorCode !== 0) setIsReloading(true);
    const showLoadMore = nextPageNum === 2;
    // 第三頁的資料由 loadmore 載入
    if (nextPageNum === 3) return;

    try {
      const nextMainData = await api.search.postSearchQuery({
        page: nextPageNum,
        question: queryString,
      });

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
        const nextMainData = await api.search.postSearchQuery({
          page: pageNum,
          question: queryString,
        });

        if (!nextMainData.data.searchHits.length) endHandler();
        else successHandler(nextMainData.data.searchHits);
      } catch (error) {
        setErrorCode(retryFailedRequest(error));
        endHandler();
      }
    })();
  };

  /* 無限下拉 end */
  const [department, setDepartment] = React.useState('');
  const [platform, setPlatform] = React.useState('');
  const [progress, setProgress] = React.useState('');

  const handleFilter = (type, parameter) => {
    switch (type) {
      case 'department':
        setDepartment(parameter);
      case 'platform':
        setPlatform(parameter);
      case 'progress':
        setProgress(parameter);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SearchListDOM = (() => {
    if (!mainData.length && !isLoading)
      return (
        <>
          <div className="no-result">
            <div className="message-container">
              <div className="message">
                <h1>抱歉，沒有找到任何相關資訊。</h1>
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

  const [selecedTeamTag, setSelecedTeamTag] = useState();

  const onTeamTagClick = (teamTag) => {
    setSelecedTeamTag(teamTag);
  };

  const AdvancedFilterDialog = () => {
    return (
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">進階篩選</DialogTitle>
          <DialogContent>
            <div className="tag-section">
              <div>
                <ul className="team-tag-list">
                  {teamTagList.map((item) => (
                    <li
                      className={clsx('team-tag tag-btn button', {
                        isSelected: selecedTeamTag === item,
                      })}
                      onClick={() => onTeamTagClick(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="sys-tag-list">
                  {systemTagList.map((item) => (
                    <li
                      className="tag-btn button"
                      // onClick={() => handleTagChange(item.labelCode)}
                    >
                      <div className="tag-label">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        <style jsx>{`
          .tag-section {
            display: flex;
            .section-title {
              font-size: 16px;
              font-weight: bold;
              text-align: center;
            }
            .tag-btn {
              display: flex;
              margin-bottom: 20px;
            }
            .team-tag {
              &.isSelected {
                font-weight: bold;
              }
            }
          }
        `}</style>
      </>
    );
  };

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
            <button className="button filter-btn" onClick={handleClickOpen}>
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
