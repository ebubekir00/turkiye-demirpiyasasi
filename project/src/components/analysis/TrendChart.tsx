import { useEffect, useRef } from 'react';

const TrendChart = () => {
  const chartRef = useRef(null);
  
  const chartData = {
    dates: ['15.12', '22.12', '29.12', '05.01', '12.01', '15.01'],
    prices: [15100, 15300, 15400, 15650, 15900, 16100],
  };
  
  useEffect(() => {
    if (!chartRef.current) return;
    
    // In a real application, you would use a proper charting library here
    // like Chart.js, Recharts, or D3.js
    
    renderChart();
  }, [chartRef]);
  
  const renderChart = () => {
    const container = chartRef.current;
    if (!container) return;
    
    // Clear previous content
    container.innerHTML = '';
    
    // Get max and min values for scaling
    const max = Math.max(...chartData.prices) * 1.01;
    const min = Math.min(...chartData.prices) * 0.99;
    const range = max - min;
    
    // Create SVG element
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "200");
    svg.setAttribute("viewBox", "0 0 800 200");
    
    // Create background grid lines
    for (let i = 0; i <= 4; i++) {
      const y = 20 + (i * 40);
      
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", "0");
      line.setAttribute("y1", y.toString());
      line.setAttribute("x2", "800");
      line.setAttribute("y2", y.toString());
      line.setAttribute("stroke", "#e9e9e9");
      line.setAttribute("stroke-width", "1");
      
      svg.appendChild(line);
    }
    
    // Create path for the line
    const path = document.createElementNS(svgNS, "path");
    
    // Calculate points for the path
    const points = chartData.prices.map((price, index) => {
      const x = (index / (chartData.prices.length - 1)) * 800;
      const y = 200 - ((price - min) / range) * 160;
      return `${x},${y}`;
    });
    
    // Create the path data
    let pathData = `M ${points[0]}`;
    for (let i = 1; i < points.length; i++) {
      pathData += ` L ${points[i]}`;
    }
    
    path.setAttribute("d", pathData);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#486581");
    path.setAttribute("stroke-width", "3");
    
    // Create gradient area
    const areaPath = document.createElementNS(svgNS, "path");
    
    // Calculate points for the area path (includes bottom points)
    let areaPathData = `M ${points[0]}`;
    for (let i = 1; i < points.length; i++) {
      areaPathData += ` L ${points[i]}`;
    }
    
    // Add bottom line and closing path
    areaPathData += ` L ${(chartData.prices.length - 1) / (chartData.prices.length - 1) * 800},200 L 0,200 Z`;
    
    areaPath.setAttribute("d", areaPathData);
    
    // Create gradient
    const gradient = document.createElementNS(svgNS, "linearGradient");
    gradient.setAttribute("id", "areaGradient");
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "0%");
    gradient.setAttribute("y2", "100%");
    
    const stop1 = document.createElementNS(svgNS, "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#486581");
    stop1.setAttribute("stop-opacity", "0.3");
    
    const stop2 = document.createElementNS(svgNS, "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#486581");
    stop2.setAttribute("stop-opacity", "0.05");
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    
    const defs = document.createElementNS(svgNS, "defs");
    defs.appendChild(gradient);
    
    areaPath.setAttribute("fill", "url(#areaGradient)");
    
    // Add circles for each data point
    chartData.prices.forEach((price, index) => {
      const x = (index / (chartData.prices.length - 1)) * 800;
      const y = 200 - ((price - min) / range) * 160;
      
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", x.toString());
      circle.setAttribute("cy", y.toString());
      circle.setAttribute("r", "4");
      circle.setAttribute("fill", "#486581");
      circle.setAttribute("stroke", "white");
      circle.setAttribute("stroke-width", "2");
      
      svg.appendChild(circle);
    });
    
    // X axis labels
    chartData.dates.forEach((date, index) => {
      const x = (index / (chartData.dates.length - 1)) * 800;
      
      const text = document.createElementNS(svgNS, "text");
      text.setAttribute("x", x.toString());
      text.setAttribute("y", "195");
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("fill", "#627d98");
      text.setAttribute("font-size", "12");
      text.textContent = date;
      
      svg.appendChild(text);
    });
    
    svg.appendChild(defs);
    svg.appendChild(areaPath);
    svg.appendChild(path);
    container.appendChild(svg);
  };
  
  return (
    <div ref={chartRef} className="w-full h-48"></div>
  );
};

export default TrendChart;