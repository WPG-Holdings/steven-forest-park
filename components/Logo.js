import React from 'react';
import Link from 'next/link';

function Logo(props) {
  const { width, height } = props;
  return (
    <>
      <div id="logo" className="logo">
        <Link href="/">
          <a>
            <img className="logo" src="/dung-jing-logo-white.png"></img>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .logo {
          width: ${width};
          height: ${height};
        }
      `}</style>
    </>
  );
}

export default Logo;
