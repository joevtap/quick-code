import React from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
    const [offsetY, setOffsetY] = React.useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div>
            <div className={styles.container}>
                <h1>teste</h1>
                <h2 style={{ transform: `translateX(${offsetY * 0.5}px)` }}>
                    Vai mais rapido
                </h2>
            </div>
            <div className={styles.container}>
                <h1>teste 2</h1>
                <h2 style={{ transform: `translateX(${offsetY * 1.5}px)` }}>
                    Vai mais rapido
                </h2>
            </div>
        </div>
    );
}
