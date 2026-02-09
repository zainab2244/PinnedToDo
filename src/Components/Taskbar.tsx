import "./TaskBar.css";
import { useEffect, useState } from "react";

export default function Taskbar() {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    (async () => {
      const current = await window.electronAPI.getAlwaysOnTop();
      setIsPinned(current);
    })();
  }, []);

  const togglePin = async () => {
    const next = !isPinned;
    const actual = await window.electronAPI.toggleAlwaysOnTop(next);
    setIsPinned(actual);
  };

  return (
    <div className="taskBar">
      <p>To-Do</p>

      <div className="winBtns">
        <button className="taskBtns min" onClick={togglePin}>
            {isPinned ? "📌" : "📍"}
        </button>

        <button className="taskBtns min">━</button>

        <button
          className="taskBtns max"
          onClick={() => window.resizeTo(800, 800)}
        >
          🗖
        </button>

        <button className="taskBtns" onClick={() => window.close()}>
          ✖
        </button>
      </div>
    </div>
  );
}
