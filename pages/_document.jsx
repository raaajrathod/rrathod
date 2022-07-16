// Create Meta Data component for NExt.js project
// Create Meta Data component for NExt.js project
import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
// SEO Component
import SEO from './SEO';

export default function Document() {
    return (
        <Html lang="en">
            <Head key={1}>
                
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
