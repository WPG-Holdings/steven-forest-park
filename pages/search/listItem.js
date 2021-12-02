import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';
import Link from 'next/link';
import IconSvg from '@/components/IconSvg';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const SearchListItem = (props) => {
  const {
    titleId,
    question,
    processMethod,
    systemTag,
    teamTag,
    endTime,
    endFlag,
  } = props;

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);

  return (
    <>
      <div className="search-list-item">
        <div>
          <LightTooltip title={question} placement="top-end">
            <a
              href={`/search/detail/${titleId}`}
              target="_blank"
              id={titleId}
              className="title"
            >
              {question}
            </a>
          </LightTooltip>
          <div className="content">{processMethod}</div>
        </div>
        <div className="bottom-content">
          <span className="team-tag tag">{teamTag}</span>
          <span className="sys-tag tag">{systemTag}</span>
          <span className="endTime">
            {endFlag === 'Y' ? endTime.slice(0, 10) : '尚未處理'}
          </span>
        </div>
        <hr className="divider-line" />
      </div>
      <style jsx>{`
        .search-list-item {
          margin: 20px auto;
          width: 100%;
          .title {
            color: #005c9f;
            font-size: 16px;
            font-weight: bold;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .content {
            margin-top: 5px;
            color: #626367;
            font-size: 14px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .bottom-content {
            margin-top: 20px;
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
            .endTime {
              float: right;
            }
          }

          .divider-line {
            width: 100%;
            margin: 20px 0;
            color: #c4c4c4;
          }
        }
      `}</style>
    </>
  );
};

export default SearchListItem;
