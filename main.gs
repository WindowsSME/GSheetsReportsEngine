/**
 * Runs the full workflow: sheet prep, formulas, pivot, visuals, cleanup.
 */
function runAllTasks() {
  Logger.log("Starting all tasks...");
  copyMultipleSheetsToTabs();
  renameSheetAndWorkbook();
  Utilities.sleep(1000); 
  addHeadersAndDynamicFormulas();
  SpreadsheetApp.flush();
  Utilities.sleep(3000);
  createStyledPivotTables();
  setColumnWidths();
  createPieChart();
  addNoteToCell();
  hideGridlines();
  deleteColumns();
  deleteRows();
  Logger.log("All tasks completed successfully!");
}

/**
 * Runs only pivot/visual/reporting tasks.
 */
function runRemainingTasks() {
  Logger.log("Starting remaining tasks...");
  createStyledPivotTables();
  setColumnWidths();
  createPieChart();
  addNoteToCell();
  hideGridlines();
  deleteColumns();
  deleteRows();
  Logger.log("Remaining tasks completed!");
}

/**
 * Runs only the import and setup portion.
 */
function runMinimalTasks() {
  Logger.log("Starting initial tasks...");
  copyMultipleSheetsToTabs();
  renameSheetAndWorkbook();
  Utilities.sleep(1000); 
  addHeadersAndDynamicFormulas();
  SpreadsheetApp.flush();
  Logger.log("Initial tasks completed!");
}
