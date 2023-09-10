import DEFAULT_THEME from "constants/defaultTheme";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import extractFromCookie from "utils/extractFromCookie";

let theme = "light";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    theme =
      extractFromCookie(ctx.req?.headers.cookie, "theme") || DEFAULT_THEME;
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Nanum+Myeongjo:wght@800&family=Roboto+Slab:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body data-theme={theme}>
          <div id="toast-root" />
          <Main />
          <NextScript />
          <div id="portal" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
