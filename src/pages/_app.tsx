import { AppProps } from "next/app";
import "@/styles/global.css";

import Base from "../layouts/base";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  );
}
