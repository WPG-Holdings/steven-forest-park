import HeadMeta from '@/container/HeadMeta';
import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';
import ProductDetail from '@/components/ProductDetail';

export default function BedDetail() {
  const { useTheme } = useContext(ThemeContext);

  return (
    <>
      <HeadMeta title={'東璟家具 - 床架介紹'} />
      <div className="page-bedDetail"></div>
      <style jsx>{``}</style>
    </>
  );
}
