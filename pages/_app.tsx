import 'styles/globals.scss'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
// Font Awesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Layout from '@components/layouts/layout'
import React from "react"

config.autoAddCss = false

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // getLayoutにはページコンポーネントのgetLayoutプロパティに用意されたレイアウトを構成する関数を渡し、
  // getLayoutプロパティが存在しない場合には、これまで通りのレイアウトでページコンポーネントをそのまま表示する関数を渡す

  const getLayout = Component.getLayout || ((page: JSX.Element) => page);
  return (
    <>
      {/* グローバルサイトタグをインストールするためのコード*/}
      {/* START */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
            `,
        }}
      />
      {/* END */}
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  );
};

export default MyApp