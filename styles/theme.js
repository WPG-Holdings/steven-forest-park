const light = {
  type: 'light',
  background: {
    primary: '#F8F9FF',
    secondary: '#ffffff',
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)',
  },
  primary: {
    main: '#3f51b5',
    dark: '#303f9f',
    light: '#7986cb',
  },
  secondary: {
    main: '#9E9E9E',
    dark: '#303f9f',
    light: '#7986cb',
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  common: {
    white: '#ffffff',
    black: '#000000',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};

const dark = {
  type: 'dark',
  background: {
    primary: '#212121',
    secondary: '#111111',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)',
  },
  primary: {
    main: '#3f51b5',
    dark: '#303f9f',
    light: '#7986cb',
  },
  secondary: {
    main: '#9E9E9E',
    dark: '#303f9f',
    light: '#7986cb',
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  common: {
    white: '#ffffff',
    black: '#000000',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
};

const defaultTheme = {
  fontSizes: [
    '14px', // 0
    '16px', // 1
    '18px', // 2
    '22px', // 3
    '26px', // 4
    '32px', // 5
    '40px', // 6
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  layout: {
    s6: '6px',
    s12: '12px',
    s15: '15px',
    s24: '24px',
    s30: '30px',
    s36: '36px',
    s45: '45px',
    s60: '60px',
    bodyOffsetTop: '6em',
    footerHeight: '3.5em',
    mediaXSmall: 767,
    mediaSmall: 992,
    mediaMedium: 1025,
    mediaLarge: 1312,
    mediaXlarge: 1920,
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
