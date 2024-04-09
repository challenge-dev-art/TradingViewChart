import React, { useRef, useEffect } from 'react';
import './TradingViewChart.css';

const TradingViewChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const widgetOptions = {
      symbol: 'AAPL',
      interval: 'D',
      fullscreen: true,
      container_id: chartContainerRef.current.id,
      autosize: true
      // Add more options as needed
    };

    const widget = new window.TradingView.widget(widgetOptions);

    return () => {
      widget.remove();
    };
  }, []);

  return <div id="tv-chart-container" ref={chartContainerRef} style={{ width: '100%', height: '500px' }} />;
};

export default TradingViewChart;
