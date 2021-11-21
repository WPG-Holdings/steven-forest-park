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
    Edit: {
      attrs: {
        className: `svg_icon svg_icon-edit ${className}`,
      },
      dom: (
        <>
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
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
    Plus: {
      attrs: {
        className: `svg_icon svg_icon-plus ${className}`,
      },
      dom: (
        <>
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </>
      ),
    },
    Minus: {
      attrs: {
        className: `svg_icon svg_icon-minus ${className}`,
      },
      dom: <line x1="5" y1="12" x2="19" y2="12"></line>,
    },
    CheckCircle: {
      attrs: {
        className: `svg_icon svg_icon-check-circle ${className}`,
      },
      dom: (
        <>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </>
      ),
    },
    TrashCan: {
      attrs: {
        className: `svg_icon svg_icon-trash_can ${className}`,
      },
      dom: (
        <>
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </>
      ),
    },
    Top: {
      attrs: {
        viewBox: '0 0 32 32',
        className: `svg_icon svg_icon-top ${className}`,
      },
      dom: (
        <path
          d="M10,14c0.3,0,0.5-0.1,0.7-0.3L15,9.4V25c0,0.6,0.4,1,1,1s1-0.4,1-1V9.4l4.3,4.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
	c0.4-0.4,0.4-1,0-1.4l-6-6c-0.1-0.1-0.2-0.2-0.3-0.2c-0.2-0.1-0.5-0.1-0.8,0c-0.1,0.1-0.2,0.1-0.3,0.2l-6,6c-0.4,0.4-0.4,1,0,1.4
	C9.5,13.9,9.7,14,10,14z"
        />
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
    ArrowDownCircle: {
      attrs: {
        className: `svg_icon svg_icon-arrow-down-circle ${className}`,
      },
      dom: (
        <>
          <circle cx="12" cy="12" r="10" />
          <polygon points="7 9 12 16 17 9" style={{ fill: '#3195f0' }} />
        </>
      ),
    },
    Mail: {
      attrs: {
        className: `svg_icon svg_icon-mail ${className}`,
      },
      dom: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </>
      ),
    },
    FileText: {
      attrs: {
        className: `svg_icon svg_icon-file-text ${className}`,
      },
      dom: (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </>
      ),
    },
    User: {
      attrs: {
        className: `svg_icon svg_icon-user ${className}`,
      },
      dom: (
        <>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </>
      ),
    },
    Users: {
      attrs: {
        className: `svg_icon svg_icon-users ${className}`,
      },
      dom: (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </>
      ),
    },
    Sun: {
      attrs: {
        className: `svg_icon svg_icon-sun ${className}`,
      },
      dom: (
        <>
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </>
      ),
    },
    Moon: {
      attrs: {
        className: `svg_icon svg_icon-moon ${className}`,
      },
      dom: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>,
    },
    Heart: {
      attrs: {
        className: `svg_icon svg_icon-moon ${className}`,
      },
      dom: (
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      ),
    },
    Star: {
      attrs: {
        className: `svg_icon svg_icon-star ${className}`,
      },
      dom: (
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      ),
    },
    Map: {
      attrs: {
        className: `svg_icon svg_icon-map-pin ${className}`,
      },
      dom: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </>
      ),
    },
    Award: {
      attrs: {
        className: `svg_icon svg_icon-award-pin ${className}`,
      },
      dom: (
        <>
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </>
      ),
    },
    Menu: {
      attrs: {
        className: `svg_icon svg_icon-menu ${className}`,
      },
      dom: (
        <>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
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
