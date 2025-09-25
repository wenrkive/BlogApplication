import { WeatherWidget } from "./WeatherWidget";
import { StockTicker } from "./StockTicker";

export function MSNSidebar() {
  const quickLinks = [
    "Hotmail",
    "Messenger",
    "My MSN",
    "MSN Mobile",
    "MSN Toolbar",
    "MSN Search",
    "Shopping",
    "Money",
    "Autos"
  ];

  const horoscope = {
    sign: "Virgo",
    date: "Aug 23 - Sep 22",
    prediction: "Today brings new opportunities in your professional life. Stay focused and trust your instincts."
  };

  return (
    <aside className="w-64 space-y-4">
      {/* Weather Widget */}
      <WeatherWidget />

      {/* Stock Ticker */}
      <StockTicker />

      {/* Horoscope */}
      <div className="bg-white border border-msn-border">
        <div className="bg-msn-light-blue px-3 py-2 border-b border-msn-border">
          <h3 className="text-sm font-semibold text-msn-dark-blue">Horoscope</h3>
        </div>
        <div className="p-3">
          <div className="mb-2">
            <div className="text-sm font-medium text-foreground">{horoscope.sign}</div>
            <div className="text-xs text-muted-foreground">{horoscope.date}</div>
          </div>
          <p className="text-xs text-foreground leading-relaxed mb-3">
            {horoscope.prediction}
          </p>
          <a href="#" className="text-xs text-msn-blue hover:underline">
            More Horoscopes »
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white border border-msn-border">
        <div className="bg-msn-light-blue px-3 py-2 border-b border-msn-border">
          <h3 className="text-sm font-semibold text-msn-dark-blue">Quick Links</h3>
        </div>
        <div className="p-3">
          <div className="space-y-1">
            {quickLinks.map((link, index) => (
              <div key={index}>
                <a href="#" className="text-xs text-msn-blue hover:underline">
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="bg-white border border-msn-border">
        <div className="bg-msn-light-blue px-3 py-2 border-b border-msn-border">
          <h3 className="text-sm font-semibold text-msn-dark-blue">Featured Services</h3>
        </div>
        <div className="p-3 space-y-3">
          <div className="border border-msn-border p-2">
            <div className="text-xs font-medium text-foreground mb-1">MSN Premium</div>
            <div className="text-xs text-muted-foreground mb-2">
              Get ad-free browsing and exclusive content
            </div>
            <a href="#" className="text-xs text-msn-blue hover:underline">
              Learn More »
            </a>
          </div>
          
          <div className="border border-msn-border p-2">
            <div className="text-xs font-medium text-foreground mb-1">MSN Toolbar</div>
            <div className="text-xs text-muted-foreground mb-2">
              Search the web faster with instant results
            </div>
            <a href="#" className="text-xs text-msn-blue hover:underline">
              Download Free »
            </a>
          </div>
        </div>
      </div>

      {/* MSN Today */}
      <div className="bg-white border border-msn-border">
        <div className="bg-msn-light-blue px-3 py-2 border-b border-msn-border">
          <h3 className="text-sm font-semibold text-msn-dark-blue">MSN Today</h3>
        </div>
        <div className="p-3">
          <div className="text-xs text-foreground mb-2">
            Your personalized homepage with the latest news, weather, and more.
          </div>
          <a href="#" className="text-xs text-msn-blue hover:underline">
            Customize Your Page »
          </a>
        </div>
      </div>
    </aside>
  );
}