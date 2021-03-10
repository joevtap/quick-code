import styles from "../styles/pages/Home.module.scss";
import { Modal } from "../components/Modal.jsx";

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Hello</h1>
            <Modal />
        </div>
    );
};

export default Home;
