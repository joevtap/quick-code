import styles from "../styles/Home.module.scss";

import { useContexto } from "../contexts/Context";
import Tweet from "../components/Tweet";

function Home() {
    return (
        <div className={styles.container}>
            <Tweet />
        </div>
    );
}

export default Home;
