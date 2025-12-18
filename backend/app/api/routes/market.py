from fastapi import APIRouter

from app.schemas.market import MarketSummaryResponse
from app.services.market import get_mock_market_summary

router = APIRouter(prefix="/market", tags=["market"])


@router.get("/summary", response_model=MarketSummaryResponse)
def market_summary() -> MarketSummaryResponse:
    return get_mock_market_summary()
