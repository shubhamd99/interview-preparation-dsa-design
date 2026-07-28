// Build a Grid Cell Multi-Selection component similar to the selection behavior found in spreadsheet applications.
// Users should be able to click and drag to create a selection rectangle, with all cells intersecting the selection
// area becoming selected.

// The goal is to correctly handle mouse interactions, calculate the selection area in real time, and
// update the selected cells efficiently.

// Grid
// Render a 10 × 10 grid.
// Each cell should:
// Be 40px × 40px.
// Have a 1px solid black border.
// The grid should remain fixed throughout the interaction.

import Grid from "./Grid.js";

export default function App() {
  return <Grid />;
}
