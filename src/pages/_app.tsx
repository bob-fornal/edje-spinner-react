import "@/styles/globals.css";
import '/public/edje-spinner/edje-spinner.css';

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
