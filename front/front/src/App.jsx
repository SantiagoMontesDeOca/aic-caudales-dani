import React, { useState, useEffect } from 'react';
import './App.css';
import RiverSection from './components/RiverSection';
import MapComponent from './components/MapComponent'; // Asegúrate de importar MapComponent

function App() {
  const [data, setData] = useState(null);
  const [minMaxLevels, setMinMaxLevels] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch('latest.json').then(r => r.json()),
      fetch('min_max_levels.json').then(r => r.json())
    ]).then(([latestData, minMaxData]) => {
      console.log('Fetched data:', { latestData, minMaxData });
      setData(latestData);
      setMinMaxLevels(minMaxData);
    }).catch(err => {
      console.error('Error fetching data:', err);
      setError(err.message);
    });
  }, []);

  if (error) return <div className="text-white">Error: {error}</div>;
  if (!data || !minMaxLevels) return <div className="text-white">Loading...</div>;

  const orderedSections = data.sections.sort((a, b) => a.order - b.order);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">AIC - Caudales programados</h1>
        <p className="text-gray-300 text-sm">Todos los valores estan expresados en m³/s</p>
      </div>

      {/* Mostrar el Mapa con las Estaciones */}
      <MapComponent /> 

      {orderedSections.map((section, index) => (
        <RiverSection key={index} section={section} minMaxLevels={minMaxLevels[section.id]} />
      ))}
    </div>
  );
}

export default App;
