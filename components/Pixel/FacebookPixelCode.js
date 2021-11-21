import React from 'react';
import Head from 'next/head';

import FaceBookPixel1 from '@/components/Pixel/pixel-1';

export default ({ name }) => {
  return <Head>{name === 'FACEBOOK_PIXEL_1' && <>{FaceBookPixel1}</>}</Head>;
};
