// _app.jsx files for the application.
// This file is used to render the application.
// It is the entry point for the application.
// It is the root component of the application.
// It is the first file that is loaded when the application is started.

// Import SCSS file 
import '../src/app.scss';
import SEO from './SEO';
import Script from 'next/script';
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head key={2}>
                <link rel="shortcut icon" href="/img/favicon.ico" />
                <link rel="icon" href="./img/favicon.ico" />
                <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
                <link rel="manifest" href="/img/site.json" />
                <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
                <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/img/favicon-96x96.png" sizes="96x96" />
            </Head>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-NV3HSTM606"></Script>
            <Script strategy="lazyOnload">{`
                
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-NV3HSTM606');
                    `}
            </Script>
            <SEO description={`Raj Rathod is a self-taught Frontend Developer / Engineer who loves to develop frontend and designs the Website very occasionally.`} title={`Raj Rathod`} siteTitle={`Raj Rathod Website`} />
            <Component {...pageProps} />
        </>);
}


