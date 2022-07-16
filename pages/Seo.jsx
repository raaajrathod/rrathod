
import Head from 'next/head'

export default function SEO({ description, title, siteTitle }) {

    return (
        <Head key={0}>

            <html lang="en" />
            <meta charset="utf-8" />
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="author" content="Raj Rathod" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#0a192f" />
            <meta name="description" content={description} />
            <meta name="image" content={`https://www.raaajrathod.com/img/profile_img.jpg`} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`https://www.raaajrathod.com/img/profile_img.jpg`} />
            <meta property="og:url" content={`https://www.raaajrathod.com`} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={`raaajrathod`} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`https://www.raaajrathod.com/img/profile_img.jpg`} />

        </Head>
    )
}