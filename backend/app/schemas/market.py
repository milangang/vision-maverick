from __future__ import annotations

from datetime import datetime

from pydantic import BaseModel


class MarketItem(BaseModel):
    symbol: str
    price: float
    change_24h_pct: float


class MarketSummaryResponse(BaseModel):
    as_of: datetime
    items: list[MarketItem]
