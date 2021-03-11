import { createContext, useContext, useState, useEffect } from "react";

export const MissionContext = createContext();

export const MissionProvider = ({ children }) => {
    const [level, setLevel] = useState(1);
    const [unlockedMissions, setUnlockedMissions] = useState(1);

    const levelUp = () => {
        setLevel(level + 1);
    };

    const unlockMission = () => {
        setUnlockedMissions(unlockedMissions + 1);
    };

    useEffect(unlockMission, [level]);

    return (
        <MissionContext.Provider
            value={{
                level,
                setLevel,
                levelUp,
                unlockedMissions,
                setUnlockedMissions,
            }}
        >
            {children}
        </MissionContext.Provider>
    );
};

export const useMission = () => {
    const context = useContext(MissionContext);

    const {
        level,
        setLevel,
        levelUp,
        unlockedMissions,
        setUnlockedMissions,
    } = context;

    return { level, setLevel, levelUp, unlockedMissions, setUnlockedMissions };
};
