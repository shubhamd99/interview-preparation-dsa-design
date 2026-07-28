import { useEffect, useRef, useState } from "react";
import { drawSelectionBox, areRectanglesOverlapping } from "./utils.js";

const ROWS = 10;
const COLS = 10;
const CELL_COUNT = ROWS * COLS;

export default function Grid() {
  const gridRef = useRef(null);
  const selectionBoxRef = useRef(null);
  // Stores where the drag started.
  const dragOrigin = useRef(null);
  const [selectedCells, setSelectedCells] = useState(new Set());

  useEffect(() => {
    function onMouseDown(e) {
      // Remember the drag starting position.
      dragOrigin.current = {
        x: e.clientX,
        y: e.clientY,
      };

      // Reset previous selection.
      setSelectedCells(new Set());
    }

    function onMouseMove(e) {
      const origin = dragOrigin.current;

      // Ignore if user isn't dragging.
      if (!origin) {
        return;
      }

      const boxEl = selectionBoxRef.current;

      // Update the selection box.
      // selection box is purely visual
      // so we directly mutate its style property
      // rather than controlling it via React state
      // libraries like react-beautiful-dnd, dnd-kit works this way too.
      drawSelectionBox({ x: e.clientX, y: e.clientY }, origin, boxEl);

      const boxRect = boxEl.getBoundingClientRect();
      const cells = gridRef.current.querySelectorAll(".grid-square");

      const selected = new Set();

      // Select every cell overlapping with the selection box.
      cells.forEach((cell, i) => {
        if (areRectanglesOverlapping(boxRect, cell.getBoundingClientRect())) {
          selected.add(i);
        }
      });

      setSelectedCells(selected);
    }

    function onMouseUp() {
      // Stop dragging and hide the selection box.
      dragOrigin.current = null;
      if (selectionBoxRef.current) {
        selectionBoxRef.current.style = "";
      }
    }

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // clean-up
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div ref={gridRef} className="selection-board">
      <div ref={selectionBoxRef} className="drag-selection" />

      <div className="cell-grid">
        {Array.from({ length: CELL_COUNT }, (_, i) => (
          <div
            key={i}
            className={`grid-square${
              selectedCells.has(i) ? " grid-square--active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
