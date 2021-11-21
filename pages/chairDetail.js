import HeadMeta from '@/container/HeadMeta';
import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';
import ProductDetail from '@/components/ProductDetail';

export default function ChairDetail() {
  const { useTheme } = useContext(ThemeContext);

  return (
    <>
      <HeadMeta title={'東璟家具 - 單椅介紹'} />
      <div className="page-chairDetail"></div>
      <style jsx>{``}</style>
    </>
  );
}
