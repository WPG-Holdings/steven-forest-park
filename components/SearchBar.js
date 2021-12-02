import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';
import Link from 'next/link';
import IconSvg from '@/components/IconSvg';

const SearchBar = (props) => {
  const { useTheme } = useContext(ThemeContext);
  const { type, onHandleSearch, queryString, onChangeInput, onClickButton } =
    props;

  return (
    <>
      <div className="search-input-area">
        <input
          type="text"
          className="search-input t-heading-large"
          placeholder={'輸入關鍵字'}
          value={queryString}
          onChange={(e) => onChangeInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onHandleSearch(queryString);
            }
          }}
        />
        <button
          type="button"
          // onClick={() => props.onClickButton(props.queryString)}
          className="search-button button"
        >
          <IconSvg
            fill="none"
            stroke={'#000'}
            strokeWidth={1.5}
            size={24}
            type="Search"
          />
        </button>
      </div>
      <style jsx>{`
        .search-input-area {
          position: relative;
          text-align: center;
          .search-input {
            height: 60px;
            width: ${type === 'main' ? '70%' : '100%'};
            border-radius: 30px;
            background-color: #f2f0eb;
            box-shadow: 3px 2px 5px 1px gray;
            border: none;
            padding: 0 50px;
          }
          input:focus {
            outline: none;
          }
          .search-button {
            position: absolute;
            top: 18px;
            right: ${type === 'main' ? '18%' : '5%'};
          }
        }
      `}</style>
    </>
  );
};

export default SearchBar;
