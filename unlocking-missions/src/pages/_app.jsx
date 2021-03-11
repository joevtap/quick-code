import "../styles/global.scss";
import { MissionProvider } from "../contexts/MissionContext.jsx";

function MyApp({ Component, pageProps }) {
    return (
        <MissionProvider>
            <Component {...pageProps} />
        </MissionProvider>
    );
}

export default MyApp;
