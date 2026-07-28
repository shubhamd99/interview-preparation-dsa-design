export function areRectanglesOverlapping(rectA, rectB) {
  const noOverlap =
    rectA.right <= rectB.left || // A is entirely to the left of B
    rectA.left >= rectB.right || // A is entirely to the right of B
    rectA.bottom <= rectB.top || // A is entirely above B
    rectA.top >= rectB.bottom; // A is entirely below B

  return !noOverlap;
}

export function drawSelectionBox(cursor, origin, el) {
  const { x: originX, y: originY } = origin;
  const { x: cursorX, y: cursorY } = cursor;

  const left = Math.min(cursorX, originX);
  const top = Math.min(cursorY, originY);
  const width = Math.abs(cursorX - originX);
  const height = Math.abs(cursorY - originY);

  el.style.display = "block";
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
}
