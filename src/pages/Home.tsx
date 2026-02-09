import { useNavigate } from "react-router-dom";
import "./Home.css"
import Taskbar from "../Components/Taskbar";
import { useEffect, useState } from "react";

type HomeProps = {
  onClearFlowers: () => void;
};

export default function Home({ onClearFlowers }: HomeProps) {

  const navigate = useNavigate();

  return (
    <div className="container">
        <Taskbar />
        {/*<div className="img"></div>*/}
        <div className="homeCon">
            <h1 className="title">Home</h1>
            <p className="desc">Welcome to the app</p>

            <button onClick={() => navigate("/main")} className="startBtn">
                Go to Main Page
            </button>
            <button className="resetBtn" onClick={onClearFlowers}>↻</button>
           
        </div>
    </div>
  );
}
