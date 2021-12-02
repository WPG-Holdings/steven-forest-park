import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import AsideListItem from './listItem';

const Aside = (props) => {
  const { keywordDataList } = props;

  return (
    <>
      <aside className="keywords-aside-chart">
        <div className="title">熱門關鍵字</div>
        {keywordDataList.map((item, index) => {
          return (
            <AsideListItem
              key={index}
              num={index}
              listData={item}
              count={item.counts}
              sysTagList={item.sysTag}
              teamTagList={item.teamTag}
            />
          );
        })}
      </aside>

      <style jsx>{`
        aside {
          margin-top: 40%;
        }
        .title {
          border-left: 3px solid;
          padding: 0 5px;
          color: #cf3f34;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

export default Aside;
