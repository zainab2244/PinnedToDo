import Taskbar from "../Components/Taskbar";
import { useNavigate } from "react-router-dom";
import "./Main.css"
import { useEffect, useState } from "react";

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
                <input type="text" className="taskInput" placeholder="Add a new task..." />
                <ul className="taskList">
                    <li className="taskItem">Sample Task 1</li> 
                </ul>
            </div>
            <button onClick={() => navigate("/home")} className="return">←</button>
            <button className="resetBtn" onClick={onClearClouds}>↻</button>
        </div>
    );
}
