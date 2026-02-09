import Taskbar from "../Components/Taskbar";
import { useNavigate } from "react-router-dom";
import "./Main.css"
import TodoList from "../Components/toDoList";

type HomeProps = {
  onClearClouds: () => void;
};


export default function Main({ onClearClouds }: HomeProps) {

    const navigate = useNavigate();
    return (
        <div className="container">
            <Taskbar />
            <div className="mainTitle">
                <h1>To Do</h1>
            </div>
            <div className="content">
                <TodoList />
            </div>
            <button onClick={() => navigate("/home")} className="return">←</button>
            <button className="resetBtn" onClick={onClearClouds}>↻</button>
        </div>
    );
}
