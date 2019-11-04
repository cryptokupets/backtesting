import { streamAdviceToTrade } from "advice-to-trade";
import { streamAdvice } from "get-advice";
import { Readable } from "stream";

export function streamTrades({
  exchange,
  currency,
  asset,
  period,
  start,
  end,
  indicators,
  code,
  initialBalance
}: any): Readable {
  const rs = streamAdvice({
    exchange,
    currency,
    asset,
    period,
    start,
    end,
    indicators,
    code
  });
  // rs.on("data", chunk => console.log("data:", JSON.parse(chunk)));

  const ts = streamAdviceToTrade(initialBalance);
  rs.pipe(ts);
  return ts;
}
