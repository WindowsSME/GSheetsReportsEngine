# GSheets Compliance Engine
A comprehensive Google Apps Script toolkit for automating compliance reporting and endpoint analytics in Google Sheets.
This system pulls in data from multiple sources, injects dynamic formulas, builds styled pivot tables, generates charts, and formats reports — all with one click.

---

## Features

- Copy data from external Google Sheets into dynamic tabs
- Rename sheets and files programmatically
- Inject conditional formulas and headers automatically
- Build pivot tables for campaign, version, or device tracking
- Apply professional formatting and visuals (charts, borders, gridlines)
- Clean up excess rows/columns automatically
- Run full or minimal workflows using custom runners

---

## Folder Structure

```
src
├── main.gs               # Workflow runners (runAllTasks, etc.)
├── sheetManager.gs       # Sheet and workbook renaming, sheet imports
├── dataPrep.gs           # Formula conversion, type casting
├── formulas.gs           # Header + formula injection
├── reporting.gs          # Pivot table generation
├── visuals.gs            # Charts and annotations
├── styling.gs            # Gridline/hue formatting and widths
├── cleanup.gs            # Row/column removal
└── utils.gs              # Reusable helpers like copy to clipboard
```

---

## Quick Start

1. Open your Google Sheet
2. Go to **Extensions > Apps Script**
3. Paste in the code from this repository
4. Click the function dropdown and run `runAllTasks`

---

## Automation Modes

| Mode | Description |
|------|-------------|
| `runAllTasks()` | Runs full import → enrich → report → format pipeline |
| `runRemainingTasks()` | Runs only reporting, charting, and formatting |
| `runMinimalTasks()` | Just imports and adds formulas |

---

## Use Cases

- Chrome OS and GP version compliance reports
- Endpoint installation audits
- Campaign-level insights for apps and devices
- Automating scheduled device health dashboards

---

## Requirements

- Google Workspace or Gmail account
- Google Sheets access
- App permissions to use `SpreadsheetApp` and external Sheet IDs


