export type MarketItem = {
  symbol: string
  price: number
  change_24h_pct: number
}

export type MarketSummaryResponse = {
  as_of: string
  items: MarketItem[]
}

const DEFAULT_API_BASE_URL = 'http://127.0.0.1:8000'

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL

export async function fetchMarketSummary(options?: {
  signal?: AbortSignal
}): Promise<MarketSummaryResponse> {
  const res = await fetch(`${API_BASE_URL}/market/summary`, {
    signal: options?.signal,
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch market summary (HTTP ${res.status})`)
  }

  return (await res.json()) as MarketSummaryResponse
}
