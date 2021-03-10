import { ModalWindow } from "./ModalWindow.jsx";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext.jsx";

export const Modal = () => {
    const { showModal, isModalOpen, closeModal } = useContext(ModalContext);

    return (
        <div>
            <ModalWindow isOpen={isModalOpen} closeModal={closeModal} />
            <button onClick={showModal}>Open modal</button>
        </div>
    );
};
