import styles from "../styles/Home.module.scss";
import { useMission } from "../contexts/MissionContext.jsx";
import { Mission } from "../components/Mission.jsx";

const Home = () => {
    const { level, levelUp, unlockedMissions } = useMission();

    return (
        <div className={styles.container}>
            <div className={styles.stats}>
                <h2>Level: {level}</h2>
                <h2>Unlocked missions: {unlockedMissions}</h2>
                <button onClick={levelUp}>Level up</button>
            </div>
            <div>
                <Mission id={1} />
                <Mission id={2} />
                <Mission id={3} />
                <Mission id={4} />
            </div>
        </div>
    );
};

export default Home;
