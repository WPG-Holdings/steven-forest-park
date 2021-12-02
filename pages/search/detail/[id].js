import HeadMeta from '@/container/HeadMeta';
import React, { useContext, useState, useEffect } from 'react';
import api from '@/api';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/router';
import { retryFailedRequest } from '@/api/instances';
import Tooltip from '@material-ui/core/Tooltip';
import IconSvg from '@/components/IconSvg';

const SearchDetail = (props) => {
  const { sid, searchDetailData } = props;

  const copyToClipboard = () => {
    if (window.isSecureContext) {
      const textField = document.createElement('textarea');
      textField.innerText = searchDetailData.processMethod;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      alert('複製成功!');
    }
  };

  return (
    <>
      <HeadMeta
        title={'OP Keywords - 搜尋'}
        description={'OP Keywords'}
        keywords={'OP Keywords'}
      />
      <div id="detailPage" className="detail-page">
        <div className="title">
          <div className="case-id">ID: {sid}</div>
          <div className="end-flag">
            {searchDetailData.endFlag === 'Y' ? '已處理' : '未處理'}
          </div>
          <Tooltip title={searchDetailData.messageLink} placement="top-start">
            <div className="teams">
              <a href={searchDetailData.messageLink} target="_blank">
                T
              </a>
            </div>
          </Tooltip>
        </div>
        <div className="question">{searchDetailData.question}</div>
        <div className="tags">
          <span className="team-tag tag">{searchDetailData.team}</span>
          <span className="sys-tag tag">{searchDetailData.sys}</span>
        </div>
        <div className="process-method-section">
          <div className="process-title">
            <span>處理說明:</span>
            {searchDetailData.endFlag === 'Y' && (
              <button className="copy-btn button" onClick={copyToClipboard}>
                <IconSvg
                  className="copy-icon"
                  fill={'none'}
                  stroke={'#000'}
                  strokeWidth={1.5}
                  size={18}
                  type="Copy"
                />
                複製
              </button>
            )}
          </div>
          {searchDetailData.endFlag === 'Y' ? (
            <div className="process">
              <div className="process-method">
                {searchDetailData.processMethod}
              </div>
              <div className="process-info">
                <span className="process-person">
                  處理人: {searchDetailData.it}
                </span>
                {searchDetailData.endTime && (
                  <span className="end-time">
                    {searchDetailData.endTime.slice(0, 10)}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="process">尚未處理</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .detail-page {
          justify-content: center;
          padding: 0 10%;
          width: 100%;
          margin-top: 10px;
          .title {
            display: flex;
            .case-id {
              font-size: 18px;
              font-weight: bold;
            }
            .end-flag {
              padding: 3px 10px;
              border-radius: 5px;
              margin-left: 20px;
              background-color: #cf3f34;
              color: #fff;
            }
            .teams {
              height: 24px;
              width: 24px;
              background-color: #444cb6;
              color: #fff;
              font-weight: bold;
              text-align: center;
              margin-left: 20px;
              a {
                vertical-align: middle;
              }
            }
          }
          .question {
            margin-top: 20px;
            width: 80%;
            font-size: 18px;
            font-weight: bold;
            color: #005c9f;
          }
          .tags {
            margin-top: 10px;
            font-size: 12px;
            .tag {
              padding: 2px 5px;
              border-radius: 10px;
              margin-right: 10px;
            }
            .team-tag {
              background-color: #84a3bc;
            }
            .sys-tag {
              background-color: #ffc849;
            }
          }
          .process-method-section {
            padding: 30px 20px;
            background-color: #f2f0eb;
            border-radius: 10px;
            .process-title {
              font-size: 16px;
              font-weight: bold;
              .copy-btn {
                display: flex;
                float: right;
                font-size: 12px;
                color: #000;
              }
            }
            .process {
              .process-method {
                margin: 20px 0;
                font-size: 14px;
                color: #626367;
              }
              .process-info {
                font-size: 14px;
                .process-person {
                  color: #006f7a;
                }
                .end-time {
                  float: right;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};
export async function getServerSideProps(context) {
  const sid = context.query.id;
  let errorCode;
  let searchDetailData = [];
  let hotKeywordData = [];

  try {
    searchDetailData = await api.search.getSearchDetail({ sid });

    if (searchDetailData.data.searchHits[0].content.length < 1) {
      errorCode = 404;
    }
  } catch (error) {
    errorCode = retryFailedRequest(error);
    console.error(error);
  }

  return {
    props: {
      sid,
      searchDetailData: searchDetailData.data.searchHits[0].content,
    },
  };
}
export default SearchDetail;
