import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconSvg from '@/components/IconSvg';
import clsx from 'clsx';

export default function ReloadSection(props) {
  const { isLoading } = props;
  return (
    <>
      <div className="reload-section">
        <h4 className="title t-heading-medium">抱歉， 目前网路不稳定...</h4>
        <h6 className="content t-heading-small">
          为避免影响您的使用体验， 请刷新页面
        </h6>
        <h6 className="content t-heading-small">大大通感谢您的支持</h6>
        <div className="refresh-button">
          <Button
            variant="contained"
            color="primary"
            onClick={props.onReload}
            startIcon={
              <span
                className={clsx('inline-icon', {
                  loading: isLoading === true,
                })}
              >
                <IconSvg
                  fill={'none'}
                  stroke={'#000'}
                  strokeWidth={1.5}
                  size={18}
                  type="Refresh_cw"
                />
              </span>
            }
          >
            立即刷新
          </Button>
        </div>
      </div>
      <style jsx>{`
        .reload-section {
          padding: 24px 12px;
        }
        .title {
          font-weight: 500;
        }
        .content {
          line-height: 1.7;
        }
        .refresh-button {
          margin-top: 24px;
        }
        .inline-icon {
          display: inherit;
          &.loading {
            animation-name: spin;
            animation-duration: 3000ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
