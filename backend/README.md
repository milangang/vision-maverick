# Vision Maverick Backend (FastAPI)

FastAPI backend intended to run alongside the Next.js frontend.

## Requirements
- Python 3.11

## Setup
From `backend/`:

### Windows (PowerShell)
```bash
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
copy .env.example .env
```

### macOS / Linux
```bash
python3.11 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
cp .env.example .env
```

## Run (dev)
From `backend/`:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- http://localhost:8000
- Swagger UI: http://localhost:8000/docs

CORS is enabled for the Next.js dev origin: `http://localhost:3000`.

## Endpoints
- `GET /health` — health check
- `GET /market/summary` — mock market summary payload

## Notes
- There is no database yet; the market data endpoint returns mock data only.
- Configuration is environment-based via `.env` (see `.env.example`).
