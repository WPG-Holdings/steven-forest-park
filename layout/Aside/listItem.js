import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';

export default function AsideListItem(props) {
  const { num, listData, count, sysTagList, teamTagList } = props;
  return (
    <>
      <div className="keyword-item">
        <div className="keyword">
          <span className="index">{num + 1}. </span>
          <span className="word">{listData.keyword}</span>
        </div>
        {/* <div className="search-count">{count}筆搜尋</div> */}
        <div className="tag-list">
          {teamTagList
            .map((item) => {
              return <span className="team-tag tag">{item}</span>;
            })
            .slice(0, 1)}
          {sysTagList
            .map((item) => {
              return <span className="sys-tag tag">{item}</span>;
            })
            .slice(0, 2)}
          <span></span>
        </div>
      </div>

      <style jsx>{`
        .keyword-item {
          margin-top: 10px;
          .keyword {
            font-size: 16px;
          }
          .tag-list {
            margin-top: 5px;
            .tag {
              font-size: 12px;
              padding: 2px 10px;
              border-radius: 10px;
              margin-right: 3px;
            }
            .team-tag {
              background-color: #84a3bc;
            }
            .sys-tag {
              background-color: #ffc849;
            }
          }
        }
      `}</style>
    </>
  );
}
