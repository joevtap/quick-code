import { ModalProvider } from "../contexts/ModalContext.jsx";

function MyApp({ Component, pageProps }) {
    return (
        <ModalProvider>
            <Component {...pageProps} />
        </ModalProvider>
    );
}

export default MyApp;
