import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext.jsx";

const Modal = () => {
    const { hideModal, target, isModalActive } = useContext(ModalContext);

    if (!isModalActive) return null;

    switch (target) {
        case "modal1":
            return (
                <div>
                    <h1>Modal 1</h1>
                    <button type="button" onClick={hideModal}>
                        Sumir
                    </button>
                </div>
            );
        case "modal2":
            return (
                <div>
                    <h1>Modal 2</h1>
                    <button type="button" onClick={hideModal}>
                        Sumir
                    </button>
                </div>
            );
        case "modal3":
            return (
                <div>
                    <h1>Modal 3</h1>
                    <button type="button" onClick={hideModal}>
                        Sumir
                    </button>
                </div>
            );
        default:
            return null;
    }
};

export default Modal;
