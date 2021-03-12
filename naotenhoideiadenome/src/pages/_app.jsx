import { ContextProvider } from "../contexts/Context";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    );
}
export default MyApp;
