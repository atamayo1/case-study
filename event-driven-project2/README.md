# Part 2 - Event-Driven System – Case Study

## Overview

This project implements a small **event-driven system** using **Node.js (TypeScript)**, **RabbitMQ**, **React**, and **Docker**, following the **Ports and Adapters (Hexagonal) Architecture**.

The system allows users to create messages from a frontend UI, processes them asynchronously via a worker, and displays the processing results back in the UI.

---

## Architecture

Frontend (React)
↓ HTTP
Backend (Producer)
↓
RabbitMQ (messages queue)
↓
Worker (Consumer)
↓
RabbitMQ (results queue)
↓
Backend (Consumer)
↓ HTTP
Frontend (Displays results)


### Key Principles

- Asynchronous, event-driven communication
- Infrastructure fully decoupled from business logic
- Clear separation of responsibilities (Hexagonal Architecture)

---

## Technologies

- **Frontend**: React + Vite
- **Backend**: Node.js + TypeScript + Express
- **Worker**: Node.js + TypeScript
- **Messaging**: RabbitMQ
- **Containerization**: Docker & Docker Compose

---

## Hexagonal Architecture

Both backend and worker follow the same structure:


### Key Principles

- Asynchronous, event-driven communication
- Infrastructure fully decoupled from business logic
- Clear separation of responsibilities (Hexagonal Architecture)

---

## Technologies

- **Frontend**: React + Vite
- **Backend**: Node.js + TypeScript + Express
- **Worker**: Node.js + TypeScript
- **Messaging**: RabbitMQ
- **Containerization**: Docker & Docker Compose

---

## Hexagonal Architecture

Both backend and worker follow the same structure:

src/
├── domain/ # Core business models
├── ports/ # Interfaces (contracts)
├── app/ # Use cases / application logic
├── adapters/ # Infrastructure (HTTP, RabbitMQ)
└── index.ts # Bootstrap / wiring


- **Domain** has no dependency on infrastructure
- **Ports** define contracts
- **Adapters** implement external communication
- **index.ts** wires everything together

---

## How to Run

### Prerequisites

- Docker
- Docker Compose

### Start the system

```bash
docker compose up --build



- **Domain** has no dependency on infrastructure
- **Ports** define contracts
- **Adapters** implement external communication
- **index.ts** wires everything together

---

## How to Run

### Prerequisites

- Docker
- Docker Compose

### Start the system

```bash
docker compose up --build


Access

Frontend: http://localhost:5173

Backend API: http://localhost:3001

RabbitMQ UI: http://localhost:15672

user: guest

password: guest

Features

Create messages from the UI

Asynchronous processing via RabbitMQ

Worker processes messages independently

Backend consumes processing results

UI displays results in near-real time

Notes

Polling is used in the frontend for simplicity

Results are stored in memory (sufficient for a case study)

Focus is on architecture and system design, not persistence