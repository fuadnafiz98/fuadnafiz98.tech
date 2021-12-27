import { AppProps } from "next/app";
import Script from "next/script";
import "@/styles/global.css";

import Base from "../layouts/base";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-K60TPVBN7T" />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K60TPVBN7T');
       `}
      </Script>
      <Base>
        <Component {...pageProps} />
      </Base>
    </>
  );
}
