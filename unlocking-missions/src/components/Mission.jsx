import styles from "../styles/components/Mission.module.scss";
import { useMission } from "../contexts/MissionContext.jsx";

export const Mission = ({ id }) => {
    const { unlockedMissions } = useMission();

    return (
        <div
            id={id}
            className={`${styles.mission} ${
                !(unlockedMissions >= id) ? styles.disabled : null
            }`}
        ></div>
    );
};
