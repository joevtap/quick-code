import React from "react";
import "./styles.css";

function Editor() {
    const [jsInput, setJsInput] = React.useState("");
    const [cssInput, setCssInput] = React.useState("");
    const [htmlInput, setHtmlInput] = React.useState("");

    function handleJsInput(e) {
        setJsInput(e.target.value);
    }
    function handleCssInput(e) {
        setCssInput(e.target.value);
    }
    function handleHtmlInput(e) {
        setHtmlInput(e.target.value);
    }

    React.useEffect(() => {
        let style = document.createElement("style");
        style.setAttribute("scoped", "true");
        style.className = "preview-styles";
        document.querySelector(".preview-container").appendChild(style);

        document
            .querySelector(".preview-container")
            .appendChild(document.createElement("body"));
    }, []);

    function runCode() {
        document.querySelector(".preview-styles").innerText = cssInput;
        document.querySelector(".preview-container body").innerHTML = htmlInput;
    }

    return (
        <div className="editor-container">
            <div className="editor-window">
                <p>HTML</p>
                <textarea
                    onChange={handleHtmlInput}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
            <div className="editor-window">
                <p>CSS</p>
                <textarea
                    onChange={handleCssInput}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
            <div className="editor-window">
                <p>Javascript</p>
                <textarea
                    onChange={handleJsInput}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
            <button onClick={runCode}>Run</button>
        </div>
    );
}

export default Editor;
