import React from 'react';
import Head from 'next/head';

const HeadMeta = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      {/* <link rel="icon" href="/dung-jing-logo-white.png" /> */}
      <meta name="keywords" content={props.keywords} />
      <meta
        name="description"
        content={props.description ? props.description : 'dung-jing'}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '260624245678014'); 
        fbq('track', 'PageView');`,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=260624245678014&ev=PageView&noscript=1" />`,
        }}
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="author" content="Klaus Chin" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} key="og:title" />
      <meta
        property="og:description"
        content={props.description ? props.description : 'dung-jing'}
        key="og:description"
      />
      <meta property="og:image" content={``} key="og:image" />
      <meta property="og:image:alt" content="dung-jing" key="og:image:alt" />

      <meta itemProp="name" content={props.title} />
      <meta
        itemProp="description"
        content={props.description ? props.description : 'dung-jing'}
      />
      <meta itemProp="image" content={``} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta
        name="twitter:description"
        content={props.description ? props.description : 'dung-jing'}
      />

      {props.children}
    </Head>
  );
};

export default HeadMeta;
