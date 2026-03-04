import { useState } from "react";
import { Rnd } from "react-rnd";
import "./style.css";

export default function App() {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const addRectangle = () => {
    const newElement = {
      id: Date.now(),
      type: "rect",
      x: 50,
      y: 50,
      width: 120,
      height: 80
    };

    setElements(prev => [...prev, newElement]);
  };

  const addText = () => {
    const newElement = {
      id: Date.now(),
      type: "text",
      x: 60,
      y: 60,
      width: 120,
      height: 40,
      text: "Text"
    };

    setElements(prev => [...prev, newElement]);
  };

  const deleteElement = () => {
    setElements(prev => prev.filter(el => el.id !== selectedId));
    setSelectedId(null);
  };

  const updateElement = (id, updates) => {
    setElements(prev =>
      prev.map(el => (el.id === id ? { ...el, ...updates } : el))
    );
  };

  return (
    <div className="app">
      
      <div className="toolbar">
        <button onClick={addRectangle}>Add Rectangle</button>
        <button onClick={addText}>Add Text</button>
        <button onClick={deleteElement}>Delete</button>
      </div>

      <div className="canvas">
        {elements.map(el => (
          <Rnd
            bounds="parent"
            key={el.id}
            size={{ width: el.width, height: el.height }}
            position={{ x: el.x, y: el.y }}

            onDragStop={(e, d) => {
              updateElement(el.id, { x: d.x, y: d.y });
            }}

            onResizeStop={(e, direction, ref, delta, position) => {
              updateElement(el.id, {
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                ...position
              });
            }}

            onClick={() => setSelectedId(el.id)}
            className={selectedId === el.id ? "selected" : ""}
          >
            {el.type === "rect" && (
              <div className="rectangle"></div>
            )}

            {el.type === "text" && (
               <div
    className="text"
    contentEditable
    suppressContentEditableWarning
  >
    {el.text}
  </div>
             
            )}
          </Rnd>
        ))}
      </div>

    </div>
  );
}