import styles from "../styles/components/ModalWindow.module.scss";

export const ModalWindow = ({ isOpen, closeModal }) => {
    return (
        <div
            style={isOpen ? { display: "flex" } : { display: "none" }}
            className={styles.containerBg}
        >
            <div className={styles.containerForeground}>
                <button className={styles.closeButton} onClick={closeModal}>
                    X
                </button>
                <h2>Modal Title</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate aliquam totam commodi. In commodi reiciendis eaque
                    magnam ea! Autem nesciunt minima, recusandae quibusdam
                    explicabo ex? Necessitatibus qui unde amet corporis?
                </p>
            </div>
        </div>
    );
};
