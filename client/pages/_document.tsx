import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

let theme = "light";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    theme = extractFromCookie(ctx.req?.headers.cookie, "theme") || "light";
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body data-theme={theme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

function extractFromCookie(cookie: string | undefined, key: string) {
  if (!cookie) return null;
  const cookieArray = cookie.split(";");
  const keyValue = cookieArray.find((item) => item.trim().startsWith(key));
  if (!keyValue) return null;
  const value = keyValue.split("=")[1];
  return value;
}
