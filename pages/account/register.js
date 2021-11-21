import React, { useContext } from 'react';
import HeadMeta from '@/container/HeadMeta';
import { ThemeContext } from '@/pages/_app';

export default function Register() {
  const { useTheme } = useContext(ThemeContext);
  return (
    <>
      <HeadMeta title={'Register - dung-jing'} />
      <div id="page-register" className="page-register">
        <div id="auth-container" className="auth-container">
          <h1>立即加入 dung-jing</h1>
          <div className="content">
            <p>隨時精準的掌握潮流吧</p>
            <div className="form">
              <div className="input-group">
                <input
                  type="text"
                  data-type="text"
                  className="form-input"
                  aria-required="true"
                  aria-label="手機號碼"
                  placeholder="手機號碼"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  data-type="text"
                  className="form-input"
                  aria-required="true"
                  aria-label="請輸入密碼"
                  placeholder="請輸入密碼"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  data-type="text"
                  className="form-input"
                  aria-required="true"
                  aria-label="再次確認密碼"
                  placeholder="再次確認密碼"
                />
              </div>
            </div>

            <p className="content-text terms-link">
              通過註冊，您確認已閱讀並同意我們使用條款與隱私政策
            </p>

            <div className="form-button">
              <button type="submit" className="button btn-ot">
                註冊
              </button>
            </div>

            <p className="content-text login-link">已經是會員了嗎？登入</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .auth-container {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          padding: 20px;
          .content {
            margin: 0 auto;
            max-width: 360px;
          }
        }

        .input-group {
          padding: 6px 0;
          .form-input {
            background: ${useTheme.background.secondary};
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 6px;
            width: 100%;
            height: 48px;
            padding: 13px 12px;
          }
        }
        button[type='submit'] {
          width: 100%;
          background-color: ${useTheme.primary.main};
          color: ${useTheme.common.white};
          border: none;
          height: 48px;
          border-radius: 6px;
        }
        .content-text {
          margin-bottom: 12px;
        }

        @media screen and (min-width: ${useTheme.layout.mediaSmall}px) {
          .auth-container {
            width: 50%;
            border: 1px solid #9e9e9e;
          }
        }
      `}</style>
    </>
  );
}
