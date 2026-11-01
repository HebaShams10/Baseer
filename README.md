# 👁️ Baseer (بصير) - Backend Service

> AI-Powered Smart Assistant for the Visually Impaired  
> نظام المساعد الذكي للمكفوفين وضعاف البصر

---

## 📌 Project Overview
**Baseer** is a graduation project aimed at empowering blind and visually impaired individuals through real-time assistive technology. The backend service provides APIs for:
- **Speech-to-Text & Voice Interaction** (Egyptian Dialect Support)
- **Document Reading & OCR** with image quality checks
- **QR-Based Indoor Navigation**
- **Obstacle & Scene Description** integration

---

## 🛠️ Tech Stack
- **Framework:** [NestJS](https://nestjs.com/) (TypeScript)
- **Runtime:** Node.js (v22+)
- **Architecture:** Modular Architecture (Domain-driven modules)

---

## 📂 Modules Structure
- `src/modules/auth`: User authentication and role management
- `src/modules/users`: Profile and user preferences
- `src/modules/navigation`: QR-based indoor wayfinding and routing
- `src/modules/ocr`: Document reading, text extraction, and preprocessing
- `src/modules/voice`: Voice command parsing and TTS integration
- `src/modules/tasks`: Processing asynchronous AI tasks

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run start:dev
```

The API will be available at: `http://localhost:3000`