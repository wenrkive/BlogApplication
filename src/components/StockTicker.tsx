import { TrendingUp, TrendingDown } from "lucide-react";

export function StockTicker() {
  // Mock stock data - in a real app this would come from a financial API
  const stocks = [
    { symbol: "DJIA", value: "14,253.77", change: "+123.45", changePercent: "+0.87%", isUp: true },
    { symbol: "NASDAQ", value: "3,142.96", change: "+42.18", changePercent: "+1.36%", isUp: true },
    { symbol: "S&P 500", value: "1,548.34", change: "+15.23", changePercent: "+0.99%", isUp: true },
    { symbol: "MSFT", value: "28.45", change: "-0.32", changePercent: "-1.11%", isUp: false },
    { symbol: "AAPL", value: "421.73", change: "+12.85", changePercent: "+3.14%", isUp: true },
    { symbol: "GOOGL", value: "714.87", change: "+8.92", changePercent: "+1.26%", isUp: true }
  ];

  return (
    <div className="bg-white border border-msn-border">
      {/* Header */}
      <div className="bg-msn-light-blue px-3 py-2 border-b border-msn-border">
        <h3 className="text-sm font-semibold text-msn-dark-blue">Money</h3>
      </div>

      {/* Stock List */}
      <div className="p-3">
        <div className="space-y-2">
          {stocks.slice(0, 3).map((stock, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-foreground">{stock.symbol}</span>
                {stock.isUp ? (
                  <TrendingUp className="h-3 w-3 text-msn-green" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-msn-red" />
                )}
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{stock.value}</div>
                <div className={`text-xs ${stock.isUp ? 'text-msn-green' : 'text-msn-red'}`}>
                  {stock.change} ({stock.changePercent})
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Individual Stocks */}
        <div className="mt-4 pt-3 border-t border-msn-border">
          <div className="text-xs font-medium text-foreground mb-2">Individual Stocks</div>
          <div className="space-y-1">
            {stocks.slice(3).map((stock, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <span className="text-foreground">{stock.symbol}</span>
                <div className="text-right">
                  <span className="font-medium">{stock.value}</span>
                  <span className={`ml-2 ${stock.isUp ? 'text-msn-green' : 'text-msn-red'}`}>
                    {stock.changePercent}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Summary */}
        <div className="mt-4 pt-3 border-t border-msn-border">
          <div className="text-xs">
            <div className="flex justify-between mb-1">
              <span>Market Cap:</span>
              <span className="font-medium">$16.8T</span>
            </div>
            <div className="flex justify-between">
              <span>Volume:</span>
              <span className="font-medium">3.2B</span>
            </div>
          </div>
        </div>

        {/* More Money Link */}
        <div className="mt-3 pt-2 border-t border-msn-border">
          <a href="#" className="text-xs text-msn-blue hover:underline">
            More Money »
          </a>
        </div>
      </div>
    </div>
  );
}