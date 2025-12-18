from __future__ import annotations

from datetime import datetime, timezone

from app.schemas.market import MarketSummaryResponse


def get_mock_market_summary() -> MarketSummaryResponse:
    # Mock data only (no database / external market feed yet)
    return MarketSummaryResponse(
        as_of=datetime.now(timezone.utc),
        items=[
            {"symbol": "SPY", "price": 515.23, "change_24h_pct": 0.42},
            {"symbol": "QQQ", "price": 445.10, "change_24h_pct": -0.18},
            {"symbol": "BTC-USD", "price": 104250.00, "change_24h_pct": 1.73},
            {"symbol": "ETH-USD", "price": 5520.50, "change_24h_pct": 0.95},
        ],
    )
