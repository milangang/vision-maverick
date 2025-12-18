from __future__ import annotations

from functools import lru_cache

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    APP_NAME: str = "Vision Maverick API"
    ENVIRONMENT: str = "development"  # development|production
    LOG_LEVEL: str = "info"

    HOST: str = "0.0.0.0"
    PORT: int = 8000

    # Accept either a comma-separated string or a list (e.g. JSON array).
    CORS_ORIGINS: list[str] = Field(default_factory=lambda: ["http://localhost:3000"])

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def _parse_cors_origins(cls, v):
        if v is None:
            return ["http://localhost:3000"]
        if isinstance(v, str):
            return [o.strip() for o in v.split(",") if o.strip()]
        return v


@lru_cache
def get_settings() -> Settings:
    return Settings()
