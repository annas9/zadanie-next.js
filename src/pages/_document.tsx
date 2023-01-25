import Document, {
  Head,
  Main,
  Html,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps({
    renderPage,
  }: DocumentContext): Promise<DocumentInitialProps> {
    return renderPage();
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
