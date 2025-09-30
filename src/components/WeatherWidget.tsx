import { Cloud, Sun, CloudRain, Wind } from "lucide-react";

export function WeatherWidget() {
  // Mock weather data - in a real app this would come from an API
  const weatherData = {
    location: "Seattle, WA",
    temperature: 72,
    condition: "Partly Cloudy",
    high: 75,
    low: 62,
    humidity: 65,
    windSpeed: 8,
    forecast: [
      { day: "Today", high: 75, low: 62, condition: "Partly Cloudy", icon: "partly-cloudy" },
      { day: "Tomorrow", high: 73, low: 60, condition: "Cloudy", icon: "cloudy" },
      { day: "Wednesday", high: 68, low: 58, condition: "Rain", icon: "rain" },
      { day: "Thursday", high: 71, low: 61, condition: "Sunny", icon: "sunny" },
      { day: "Friday", high: 74, low: 63, condition: "Partly Cloudy", icon: "partly-cloudy" }
    ]
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case "cloudy":
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case "rain":
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      case "partly-cloudy":
      default:
        return <Cloud className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white border border-msn-border">
      {/* Header */}
      <div className="bg-msn-light-blue px-3 py-2 border-b border-msn-border">
        <h3 className="text-sm font-semibold text-msn-dark-blue">Weather</h3>
      </div>

      {/* Current Weather */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-medium text-foreground">{weatherData.location}</div>
            <div className="text-xs text-muted-foreground">Change Location</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-msn-blue">{weatherData.temperature}°</div>
            <div className="text-xs text-muted-foreground">F</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {getWeatherIcon("partly-cloudy")}
            <span className="text-sm">{weatherData.condition}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            H: {weatherData.high}° L: {weatherData.low}°
          </div>
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-3 text-xs border-t border-msn-border pt-3">
          <div className="flex items-center space-x-1">
            <Wind className="h-3 w-3 text-msn-gray" />
            <span>Wind: {weatherData.windSpeed} mph</span>
          </div>
          <div>
            <span>Humidity: {weatherData.humidity}%</span>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="mt-4 border-t border-msn-border pt-3">
          <div className="text-xs font-medium text-foreground mb-2">5-Day Forecast</div>
          <div className="space-y-1">
            {weatherData.forecast.slice(0, 4).map((day, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 flex-1">
                  {getWeatherIcon(day.icon)}
                  <span className="w-16">{day.day}</span>
                </div>
                <div className="text-right">
                  <span className="font-medium">{day.high}°</span>
                  <span className="text-muted-foreground mx-1">/</span>
                  <span className="text-muted-foreground">{day.low}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Weather Link */}
        <div className="mt-3 pt-2 border-t border-msn-border">
          <a href="#" className="text-xs text-msn-blue hover:underline">
            More Weather »
          </a>
        </div>
      </div>
    </div>
  );
}