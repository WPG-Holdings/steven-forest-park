import React, { useContext } from 'react';
import HeadMeta from '@/container/HeadMeta';
import { ThemeContext } from '@/pages/_app';

export default function ForgotPassword() {
  const { useTheme } = useContext(ThemeContext);
  return (
    <>
      <HeadMeta title={'Register - dung-jing'} />
      <div id="page-forgot-password" className="page-forgot-password">
        <h1>忘記密碼</h1>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
