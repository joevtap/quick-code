import { ModalContext } from "../contexts/ModalContext.jsx";
import { useContext } from "react";
import Modal from "../components/Modal.jsx";

const Home = () => {
    const { showModal } = useContext(ModalContext);

    return (
        <div>
            <h1>Um unico "modal" com conteudo dinamico</h1>
            <Modal />

            <button name="modal1" type="button" onClick={showModal}>
                Mostrar 1
            </button>
            <button name="modal2" type="button" onClick={showModal}>
                Mostrar 2
            </button>
            <button name="modal3" type="button" onClick={showModal}>
                Mostrar 3
            </button>
        </div>
    );
};

export default Home;
