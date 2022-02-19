import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { MoralisProvider } from "react-moralis";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
    const appId: string = process.env.NEXT_PUBLIC_APP_ID!;
    const serverUrl: string = process.env.NEXT_PUBLIC_SERVER_URL!;

    return (
        <MoralisProvider
            appId={appId}
            serverUrl={serverUrl}
            initializeOnMount={true}
        >
            <Toaster />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MoralisProvider>
    );
}

export default MyApp;
