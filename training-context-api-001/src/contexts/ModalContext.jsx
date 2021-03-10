import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                showModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
