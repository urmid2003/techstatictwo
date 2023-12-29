import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-H+K7U5Cn8UEFB2mMZI1iVrI8Zf1AqdEqWB2EiDp1U6s="
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-cyDk6zkihA9foueG8KyiDMyH4kQtgDzdk0wWvjtiQsOM"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
