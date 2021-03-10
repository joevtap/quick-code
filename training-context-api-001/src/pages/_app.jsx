import { ModalProvider } from "../contexts/ModalContext.jsx";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
    return (
        <ModalProvider>
            <Component {...pageProps} />
        </ModalProvider>
    );
}

export default MyApp;
