
# React Blog Application

A basic blog application built with React and `json-server` supporting all CRUD operations.

## Features
- Create, Read, Update, and Delete blog posts.
- Simple and responsive UI.
- JSON server for handling backend requests.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Start JSON Server**:
   In one terminal, run:
   ```bash
   npx json-server --watch data/db.json --port 8000
   ```

3. **Install Dependencies**:
   In another terminal, run:
   ```bash
   npm install
   ```

4. **Start the Application**:
   ```bash
   npm start
   ```

5. **Access the Blog**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
- **src**: Contains all React components and styles.
- **data/db.json**: Database file for JSON server.

## Tech Stack
- Frontend: React
- Backend: JSON Server (Simulated REST API)

---

