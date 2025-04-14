/**
 * Converts formulas in a column to static values.
 */
function convertFormulasToValues(columnNumber = 21, useFirstSheet = false) {
  // your implementation here
}

/**
 * Converts a column's values to plain text.
 */
function convertToText() {
  // your implementation here
}

/**
 * Finds the last non-empty row in a column.
 */
function findLastNonEmptyRow(data) {
  for (var i = data.length - 1; i >= 0; i--) {
    if (data[i][0] !== "") return i + 1;
  }
  return 0;
}
