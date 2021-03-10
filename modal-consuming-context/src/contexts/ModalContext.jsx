import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [target, setTarget] = useState(null);

    const showModal = (e) => {
        setTarget(e.target.name);
        console.log(e.target.innerHTML);
        setIsModalActive(true);
    };

    const hideModal = () => {
        setIsModalActive(false);
    };

    return (
        <ModalContext.Provider
            value={{
                showModal,
                isModalActive,
                setIsModalActive,
                hideModal,
                target,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
