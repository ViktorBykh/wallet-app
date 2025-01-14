# Wallet App

A responsive **mobile-first wallet application** built with **Next.js**, **React**, and **TailwindCSS**. This app provides users with an interactive interface to view and manage transactions while leveraging modern web development practices.

## [UI LINK](https://ViktorBykh.github.io/wallet-app)

## Features

### Transactions List
- **Card Balance Block**:
  - Displays the current **card balance** (randomized).
  - Calculates **available credit**: *"$1500 - card balance."*
- **No Payment Due Block**:
  - Shows a reassuring message: *"You've paid your balance."*
- **Daily Points Block**:
  - Calculates points dynamically based on the **season's progression**.
  - Highlights point caps (e.g., **29K** for high values).
- **Latest Transactions Block**:
  - Lists the **10 most recent transactions** with the following properties:
    - **Type**: Payment (+ amount) or Credit.
    - **Amount**: Displayed with clear formatting.
    - **Transaction Name**: (e.g., IKEA, Target).
    - **Description**: Supports custom text, with "Pending" noted when applicable.
    - **Date**:
      - Displays the **day name** for recent transactions.
      - Older transactions show a formatted **date**.
    - **Authorized User**: Includes the user's name if performed by someone else.
    - **Icon**: A randomly styled **FontAwesome icon** with a unique background.

### Transaction Detail
- Clicking on any transaction navigates to a detailed view displaying:
  - Full transaction details (e.g., amount, description, user, and more).

### Screenshots
- Includes screenshots of:
  - **Transactions List** screen.
  - **Transaction Detail** screen.

### Points Calculation Logic
- Based on the **day of the season**:
  - Day 1: **2 points**.
  - Day 2: **3 points**.
  - Day 3+: Formula-based calculation:
    - **100% of points from two days prior** + **60% of the previous day's points**.
    - Points are rounded, and large values are formatted (e.g., `29K`).

## Technology Stack
- **Framework**: Next.js (with TurboPack for enhanced performance).
- **Frontend**: React + TailwindCSS.
- **Icons**: FontAwesome.
- **Linting**: ESLint with TailwindCSS plugin.

## Installation and Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
