import React, { useEffect, useState, useContext } from 'react';
import HeadMeta from '@/container/HeadMeta';
import { ThemeContext } from '@/pages/_app';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '@/store/auth/actions';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';
import Link from 'next/link';

export default function Login() {
  const { useTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const router = useRouter();

  const [userAccount, setUserAccount] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const loginStatus = useSelector((state) => {
    return state.auth.loginStatus;
  });

  useEffect(() => {
    if (userAccount && userPassword.length >= 4) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [userAccount, userPassword]);

  useEffect(() => {
    if (loginStatus === 'PASS') {
      setErrorMessage('');
      router.replace('/');
    } else {
      setIsLoading(false);
      if (loginStatus === 'account not exists') {
        setErrorMessage('無此使用者');
      }
      if (loginStatus === 'passwordError') {
        setErrorMessage('密碼錯誤');
      }
    }
  }, [loginStatus]);

  const onLogin = () => {
    setErrorMessage('');
    setIsLoading(true);
    setTimeout(() => {
      dispatch(loginRequest({ userAccount, userPassword }));
    }, 0);
  };

  return (
    <>
      <HeadMeta title={'Login - dung-jing'} />
      <div id="page-login" className="page-login">
        <div id="auth-container" className="auth-container">
          <div className="header">
            <h1 className="title">登入 dung-jing</h1>
          </div>
          <div className="content">
            <form className="form">
              <div className="input-group">
                <input
                  type="text"
                  data-type="text"
                  className="form-input"
                  aria-required="true"
                  aria-label="手機號碼"
                  placeholder="手機號碼"
                  onChange={(event) => setUserAccount(event.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  data-type="text"
                  className="form-input"
                  aria-required="true"
                  aria-label="請輸入密碼"
                  placeholder="請輸入密碼"
                  onChange={(event) => setUserPassword(event.target.value)}
                />
              </div>
            </form>

            <div className="form-button">
              <button
                type="submit"
                className="button btn-ot"
                onClick={onLogin}
                disabled={isButtonDisabled || isLoading}
              >
                {isLoading ? <Loader size={24} /> : `登入`}
              </button>
              <Link href="/account/forgot-password">
                <a className="forgot-password-link">忘記密碼？</a>
              </Link>
            </div>
            <div className="sign-up-section">
              <p className="content-text login-link">
                還不是會員嗎？
                <Link href="/account/register">
                  <a className="forgot-password-link">註冊</a>
                </Link>
              </p>
            </div>
          </div>
          <small className="error-message">{errorMessage}</small>
        </div>
      </div>

      <style jsx>{`
        .auth-container {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          padding: 20px;
          .header {
            margin-top: ${useTheme.layout.s60};
            margin-bottom: ${useTheme.layout.s36};
            .title {
              margin: 0;
            }
          }
          .content {
            margin: 0 auto;
            max-width: 360px;
          }
        }
        .form {
          margin-bottom: ${useTheme.layout.s36};
        }

        .input-group {
          padding: 6px 0;
          .form-input {
            outline: none;
            background: transparent;
            border: none;
            border-bottom: 1px solid ${useTheme.secondary.main};
            box-sizing: border-box;
            width: 100%;
            padding: ${useTheme.layout.s12 + ' ' + useTheme.layout.s6};
          }
        }
        button[type='submit'] {
          width: 100%;
          background-color: ${useTheme.primary.main};
          color: ${useTheme.common.white};
          border: none;
          height: 48px;
          border-radius: 6px;
          margin-bottom: ${useTheme.layout.s24};
        }
        button[disabled] {
          cursor: default;
          opacity: 0.5;
        }
        .content-text {
          margin: 0;
        }
        .error-message {
          color: ${useTheme.error.main};
        }
        .form-button {
          margin-bottom: ${useTheme.layout.s24};
        }

        .forgot-password-link {
          color: ${useTheme.primary.main};
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
