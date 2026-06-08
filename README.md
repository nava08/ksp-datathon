# KSP InsightX

AI-Driven Crime Analytics & Visualization Platform for **Karnataka State Police Datathon 2026**.

## Project Overview
KSP InsightX is a full-stack platform designed to help investigators and analysts explore crime data, identify trends, visualize hotspots, map criminal networks, and generate actionable intelligence for operational decision-making.

## Problem Statement
Build a maintainable and scalable MVP foundation for an AI-driven crime analytics platform that can evolve across multiple hackathon phases.

## Proposed Features
- Unified Crime Dashboard for KPI visibility
- Interactive Crime Heatmap for hotspot analysis
- Criminal Network Analysis view
- Risk Scoring module placeholders
- Predictive Analytics module placeholders
- Backend APIs for health checks and future analytics services
- AI services workspace for FastAPI-based model serving

## Technology Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **AI Services:** Python, FastAPI (placeholder)
- **CI/CD:** GitHub Actions (lint/test placeholders)

## Setup Instructions
### Prerequisites
- Node.js 20+
- npm 10+
- Python 3.11+

### 1) Frontend
```bash
cd frontend
npm install
npm run dev
```

### 2) Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### 3) AI Services (placeholder)
```bash
cd ai-services
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Folder Structure
```text
.
├── frontend/
├── backend/
├── ai-services/
├── docs/
├── datasets/
└── assets/
```

## Team Information
- **Team Name:** _TBD_
- **Team Lead:** _TBD_
- **Members:** _TBD_
- **Mentor(s):** _TBD_
