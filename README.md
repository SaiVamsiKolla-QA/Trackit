# TrackIt: Personal Expense Tracker
## Project Overview
TrackIt is a personal expense tracking application designed to help individuals effortlessly manage their finances across both mobile and web platforms. The goal of V1 is to provide a robust and intuitive core for recording and reviewing personal expenses, empowering users to gain clear insights into their spending habits.

## V1 Core Features
For its initial release, TrackIt focuses on the essential functionalities for efficient expense management:

Secure User Authentication: Create an account, log in securely, and manage your profile.

Cross-Platform Data Sync: Seamless, real-time synchronization of expense data between mobile and web applications.

## Intuitive Expense Entry:

Record expense amount, category, date, notes/description, and currency.

Attach receipt photos for digital record-keeping (no OCR in V1).

Edit or delete existing expense entries.

## Comprehensive Expense Viewing:

View a chronological list of all recorded expenses.

Filter expenses by date range (e.g., Today, This Month, Custom).

Filter expenses by category.

Search expenses by keywords in notes/description.

Basic Analytics Dashboard: A simple overview showing total spending for selected periods, with a basic bar chart visualizing spending by category for the last 30 days.

## Technology Stack
TrackIt is built with a modern, scalable, and cross-platform technology stack:

Frontend (Web): React.js

Frontend (Mobile): React Native (with Expo)

Backend & Database: Firebase (Authentication, Firestore for data, Cloud Storage for receipts)

Development Assistant: Google Jules (for automated testing, bug fixing, refactoring, and dependency updates)

## Development Roadmap (High-Level)
Setup & Authentication: Project initialization, GitHub setup, Firebase integration for user management.

Expense Data Model & API: Define schema, build secure endpoints/Firestore rules for CRUD operations.

UI Implementation: Develop "Add Expense" forms and camera/file upload components for both web and mobile.

Expense List & Filters: Implement dynamic lists, filtering, and search functionalities.

Analytics Dashboard: Integrate charting libraries for basic spending visualization.

Receipt Attachments: Configure storage for receipt uploads and display.

Testing & Quality: Implement unit and UI tests, integrate CI/CD with GitHub Actions.

Deployment: Deploy web app, publish mobile development builds.

Iteration & Improvement: Gather user feedback for future enhancements (e.g., OCR, AI categorization).

Getting Started
To get a local copy up and running, follow these simple steps.

## Prerequisites
- Node.js (LTS version recommended)
- npm or Yarn
- Git
- Expo CLI (npm install -g expo-cli)

A Firebase Project (with Authentication, Firestore, and Cloud Storage enabled)

Installation
Clone the repository:
```bash

git clone https://github.com/your-username/trackit.git
cd trackit
```
Install dependencies for the web app:
```
cd web
npm install # or yarn install
```
Install dependencies for the mobile app:
```
cd ../mobile
npm install # or yarn install
```
Configure Firebase:
```
Create a .env file in both the web and mobile directories.

Add your Firebase configuration details:

REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP
```
