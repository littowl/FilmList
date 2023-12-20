import { RootProvider } from '@/components/providers'
import type { AppProps } from 'next/app'

import '@/styles/style.css'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
    return (
        <RootProvider>
            <Head>
                <title>FilmList</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <Component {...pageProps} />
        </RootProvider>
    )
}
