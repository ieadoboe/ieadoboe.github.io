import { GoogleAnalytics } from "@next/third-parties/google";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <meta name="apple-mobile-web-app-title" content="edemAI" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.20/dist/katex.min.css"
        integrity="sha384-sMefv1J1YJCHsg0mTa9YG+n/9KnJb9lGrJUUY5arg6bAL1qps/oZjmUwaHlX5Ugg"
        crossOrigin="anonymous"
      />
      <GoogleAnalytics gaId="G-VPE41GKSB9" />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
