import Editor from "./components/Editor";
import PreviewContainer from "./components/PreviewContainer";
import "./index.css";

export default function App() {
    return (
        <div className="App">
            <Editor />
            <PreviewContainer />
        </div>
    );
}
