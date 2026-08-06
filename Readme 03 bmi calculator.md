# Utility Calculator

**Live Demo:** https://olayinka-olaniran.github.io/Assessment_Project_3/
**Repository:** https://github.com/Olayinka-Olaniran/Assessment_Project_3

A calculator that handles the four basic operations, plus a BMI calculator tucked behind its own button and modal.

## Overview

This project (Weekly Assessment 3) is a physical-calculator-style keypad built from scratch: a custom string-parsing engine evaluates the typed expression (respecting operator precedence — multiplication and division before addition and subtraction) without relying on `eval()`. A second mode, opened from the `BMI` key, calculates Body Mass Index from height and weight entered in a native `<dialog>` modal.

## Features

- Four-function calculator (add, subtract, multiply, divide) with a custom expression evaluator
- Operator-precedence-aware evaluation (handles `*`/`/` before `+`/`-`)
- Syntax error detection for malformed expressions
- BMI calculator in a separate modal, reusing the same design language
- Responsive layout: fluid button sizing via `clamp()`/`min()`, a fixed-height display that never grows as you type, and breakpoints at 900px / 520px / 360px
- Collapsible side menu (hamburger toggle)

## Tech Stack

- HTML5 (native `<dialog>` element)
- CSS3 (CSS custom properties, `clamp()`, `aspect-ratio`, media queries)
- Vanilla JavaScript (custom math-string parser)

## Project Structure

```
Assessment_Project_3/
├── index.html               # Calculator UI + BMI modal + side menu
├── WeeklyAssessment3.js      # Expression evaluator, button logic, BMI calc
├── WeeklyAssessment3.css     # Responsive styling
└── CSS-Update-Notes.md       # Rationale log for the responsive CSS rework
```

## How to Run

```bash
# Option 1: open directly
open index.html

# Option 2: serve locally
npx serve .
```

## Notes

`CSS-Update-Notes.md` documents the reasoning behind the calculator's visual design (color roles, layout fixes, why the display box has a fixed height) — useful context if you're restyling this further.
