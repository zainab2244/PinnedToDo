import "./TaskBar.css"
export default function Taskbar() {

    return (
        <div>
            <div className="taskBar">
                <p>To-Do</p>
                <div className="winBtns">
                    <button className="taskBtns min">━</button>
                    <button className="taskBtns max" onClick={() => window.resizeTo(800, 800)}>🗖</button>
                    <button className="taskBtns" onClick={() => window.close()}>✖</button>
                </div>
            </div>

        </div>
    )
}