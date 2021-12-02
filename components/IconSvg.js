import React from 'react';
import clsx from 'clsx';

const IconSvg = (props) => {
  const { size, stroke, fill, strokeWidth, className, viewBox, type } = props;

  const mapTypeToSvg = {
    Home: {
      attrs: {
        className: 'svg_icon svg_icon-share',
      },
      dom: (
        <>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </>
      ),
    },
    Bookmark: {
      attrs: {
        className: 'svg_icon svg_icon-bookmark',
      },
      dom: <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />,
    },
    MessageCircle: {
      attrs: {
        className: 'svg_icon svg_icon-message-circle',
      },
      dom: (
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      ),
    },
    MessageSquare: {
      attrs: {
        className: 'svg_icon svg_icon-message-square',
      },
      dom: (
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      ),
    },
    Report: {
      attrs: {
        viewBox: '0 0 24 23',
        className: 'svg_icon svg_icon-report',
      },
      dom: (
        <>
          <circle cx={12} cy={12} r={10} />
          <path d="M4.93 4.93l14.14 14.14" />
        </>
      ),
    },
    Favorite: {
      attrs: {
        viewBox: '0 0 23 23',
        className: 'svg_icon svg_icon-favorite',
      },
      dom: (
        <>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </>
      ),
    },
    Flag: {
      attrs: {
        className: 'svg_icon svg_icon-flag',
      },
      dom: (
        <>
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </>
      ),
    },
    closeX: {
      attrs: {
        className: `svg_icon svg_icon-x ${className}`,
      },
      dom: (
        <>
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </>
      ),
    },
    ArrowLeft: {
      attrs: {
        className: `svg_icon svg_icon-arrow-left ${className}`,
      },
      dom: (
        <>
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </>
      ),
    },
    Tag: {
      attrs: {
        className: `svg_icon svg_icon-tag ${className}`,
      },
      dom: (
        <>
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </>
      ),
    },
    Clock: {
      attrs: {
        className: `svg_icon svg_icon-clock ${className}`,
      },
      dom: (
        <>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </>
      ),
    },
    ChevronLeft: {
      attrs: {
        viewBox: '0 0 24 18',
        className: `svg_icon svg_icon-chevronLeft ${className}`,
      },
      dom: (
        <>
          <polyline points="15 18 9 12 15 6" />
        </>
      ),
    },
    ChevronRight: {
      attrs: {
        viewBox: '0 0 24 18',
        className: `svg_icon svg_icon-chevronRight ${className}`,
      },
      dom: (
        <>
          <polyline points="9 18 15 12 9 6"></polyline>
        </>
      ),
    },
    ChevronDown: {
      attrs: {
        viewBox: '0 0 24 18',
        className: `svg_icon svg_icon-chevronDown ${className}`,
      },
      dom: (
        <>
          <polyline points="6 9 12 15 18 9"></polyline>
        </>
      ),
    },
    circleX: {
      attrs: {
        className: `svg_icon svg_icon-circleX ${className}`,
      },
      dom: (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </>
      ),
    },
    Filter: {
      attrs: {
        className: `svg_icon svg_icon-filter ${className}`,
      },
      dom: (
        <>
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </>
      ),
    },
    Search: {
      attrs: {
        className: `svg_icon svg_icon-search ${className}`,
      },
      dom: (
        <>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </>
      ),
    },
    Refresh_cw: {
      attrs: {
        className: `svg_icon svg_icon-refresh-cw ${className}`,
      },
      dom: (
        <>
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </>
      ),
    },
    Check: {
      attrs: {
        className: `svg_icon svg_icon-check ${className}`,
      },
      dom: (
        <>
          <polyline points="20 6 9 17 4 12"></polyline>
        </>
      ),
    },
    Copy: {
      attrs: {
        className: `svg_icon svg_icon-copy ${className}`,
      },
      dom: (
        <>
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </>
      ),
    },
  };

  return (
    <svg
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      {...mapTypeToSvg[type].attrs}
      className={clsx(mapTypeToSvg[type].attrs.className)}
    >
      {mapTypeToSvg[type].dom}
    </svg>
  );
};

export default IconSvg;
