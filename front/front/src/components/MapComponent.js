import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Datos de las estaciones con latitud y longitud
const stations = [
  { name: "CHOELE CHOEL (BOCATOMA)", lat: -39.274351, lon: -65.937257 },
  { name: "ALLEN", lat: -39.032320, lon: -67.841194 },
  { name: "PASEO DE LA COSTA", lat: -38.977561, lon: -68.047644 },
  { name: "NAHUEL HUAPI", lat: -41.056035, lon: -71.147023 },
  { name: "LAS PERLAS (AIC)", lat: -38.982076, lon: -68.136118 },
  { name: "PICHI PICUN LEUFU (NUEVA)", lat: -39.995234, lon: -69.973889 },
  { name: "VILLA LLANQUIN", lat: -40.894929, lon: -71.039162 },
  { name: "CAMPING Y.P.F.", lat: -39.096861, lon: -68.579932 },
  { name: "EA. SANICO", lat: -40.122584, lon: -70.425566 },
  { name: "SALMONICULTURA", lat: -40.670772, lon: -71.241068 },
  { name: "LA CANTERA", lat: -40.715206, lon: -71.114430 },
  { name: "VILLA TRAFUL", lat: -40.652954, lon: -71.399993 },
  { name: "CORRALITO", lat: -40.731500, lon: -70.688333 },
  { name: "P L PAINEMILLA", lat: -39.194493, lon: -70.180192 },
  { name: "LINDERO ATRAVESADO", lat: -38.749474, lon: -68.249677 },
  { name: "CHOS MALAL", lat: -37.406389, lon: -70.229167 },
  { name: "ANDACOLLO (PUENTE)", lat: -37.183480, lon: -70.677544 },
  { name: "RAHUECO", lat: -37.355418, lon: -70.454841 },
  { name: "BALSA HUITRIN (SSRRHH)", lat: -37.667532, lon: -69.977555 },
  { name: "CHOS MALAL AEROP", lat: 0.000000, lon: 0.000000 },
  { name: "COMPENSADOR EL CHANAR", lat: -38.599587, lon: -68.389558 },
  { name: "VARVARCO (PUENTE)", lat: -36.857432, lon: -70.818350 },
  { name: "NEHUEN", lat: -36.801861, lon: -70.723639 },
  { name: "LA HIGUERA", lat: -38.587020, lon: -69.362968 },
  { name: "CIPOLLETTI TOMA", lat: -38.929437, lon: -68.040957 },
  { name: "VARVARCO PUENTE (AyEE)", lat: -36.857778, lon: -70.679528 },
  { name: "PORTADA COVUNCO", lat: -38.798460, lon: -70.202406 },
  { name: "ZAPALA MET", lat: -38.898946, lon: -70.063912 },
  { name: "CAJON DE LOS CHENQUES", lat: -36.467750, lon: -70.805000 },
  { name: "PUESTO VALLEJOS", lat: -37.359611, lon: -70.712500 },
  { name: "EA. CHACAYCO", lat: -37.358709, lon: -70.870166 },
  { name: "LA BUITRERA", lat: -37.343482, lon: -70.706414 },
  { name: "TABANOS", lat: -37.433610, lon: -71.107154 },
  { name: "LOS MAITENES (SSRRHH)", lat: -37.319111, lon: -70.278639 },
  { name: "CAJON DEL CURI LEUVU", lat: -36.963611, lon: -70.388861 },
  { name: "CANAL PRINCIPAL", lat: -38.723850, lon: -68.163311 },
  { name: "LOS CARRIZOS", lat: -37.120111, lon: -70.760750 },
  { name: "LAGUNA DE EPULAFQUEN", lat: -36.827583, lon: -71.103167 },
  { name: "LOS MICHES", lat: -37.222267, lon: -70.846518 },
  { name: "BUTA MALLIN", lat: -37.222167, lon: -71.107667 },
  { name: "CAJON NEGRO", lat: -36.702667, lon: -71.029583 },
  { name: "PAMPA DEL CHACAICO", lat: -36.481378, lon: -70.500611 },
  { name: "PUESTO CORDOBA", lat: -40.505114, lon: -71.152963 },
  { name: "PUENTE CALEUFU", lat: -40.398057, lon: -70.734822 },
  { name: "SALIDA LAGO MELIQUINA", lat: -40.386899, lon: -71.256916 },
  { name: "CERRO CHAPELCO", lat: -40.264333, lon: -71.354083 },
  { name: "CERRO EL MOCHO", lat: -40.319024, lon: -71.515217 },
  { name: "PUESTO LOPEZ", lat: -40.496167, lon: -71.255500 },
  { name: "EA. QUEMQUEMTREU", lat: -40.233333, lon: -70.816667 },
  { name: "BAJADA DEL AGRIO (Nueva)", lat: -38.454020, lon: -70.086122 },
  { name: "EA. PINO ANDINO", lat: -37.928927, lon: -70.588092 },
  { name: "QUILI MALAL", lat: -38.325000, lon: -69.807722 },
  { name: "EA. HUARENCHENQUE", lat: -38.208750, lon: -70.606500 },
  { name: "CAVIAHUE", lat: -37.860000, lon: -71.080818 },
  { name: "LAS LAJAS MET", lat: -38.540000, lon: -70.390000 },
  { name: "EA. HAICHOL", lat: -38.550333, lon: -70.680083 },
  { name: "PINO HACHADO", lat: -38.660249, lon: -70.880790 },
  { name: "NAC. ARROYO HUARENCHENQUE", lat: -38.271910, lon: -70.918606 },
  { name: "SALIDA LAGO ALUMINE", lat: -38.966298, lon: -71.050374 },
  { name: "RAHUE", lat: -39.369944, lon: -70.933056 },
  { name: "EA. ALINCO (LA AIDA)", lat: -39.844610, lon: -70.862617 },
  { name: "SAN CEFERINO", lat: -39.163111, lon: -70.935528 },
  { name: "HUECHAHUE", lat: -39.972319, lon: -70.841499 },
  { name: "EA. MAMUIL MALAL", lat: -39.647395, lon: -71.269556 },
  { name: "EA. SANTA ROSA", lat: -39.370654, lon: -70.963683 },
  { name: "EA. LA OFELIA", lat: -39.373302, lon: -71.189043 },
  { name: "AÑIHUERAQUI", lat: -39.427482, lon: -71.421651 },
  { name: "NACIENTES ARROYO MALALCO", lat: -39.253250, lon: -71.365533 },
  { name: "SALIDA LAGO ÑORQUINCO", lat: -39.143969, lon: -71.236947 },
  { name: "LAGO ÑORQUINCO (TMD)", lat: -39.121041, lon: -71.318795 },
  { name: "BATEA MAHUIDA ABAJO", lat: -38.831000, lon: -71.204000 },
  { name: "CERRO LITRAN", lat: -38.787333, lon: -70.815000 },
  { name: "LITRAN ABAJO (Nacientes río Litran)", lat: -38.750250, lon: -70.871917 },
  { name: "CERRO CASA QUILA (1600)", lat: -38.965939, lon: -71.405997 },
  { name: "CERRO CASA QUILA (1800)", lat: -38.962833, lon: -71.412083 },
  { name: "LAS COLORADAS", lat: -39.552369, lon: -70.589999 },
  { name: "NACIENTES DEL CATAN LIL", lat: -39.035000, lon: -70.726250 },
  { name: "EA. CASA DE LATA", lat: -39.844366, lon: -71.177945 },
  { name: "PUESTO COLLUNCO", lat: -40.004493, lon: -71.075370 },
  { name: "EA. COLLUN CO", lat: -39.964667, lon: -71.199000 },
  { name: "LAGO HUECHULAUFQUEN (PN)", lat: -39.748250, lon: -71.476333 },
  { name: "PUESTO ANTIAO", lat: -39.750403, lon: -71.625394 },
  { name: "CERRO HUICUIFA", lat: -39.765389, lon: -71.608297 },
  { name: "PUENTE R. N. 234 (SSRRHH)", lat: -40.057616, lon: -71.076908 },
  { name: "SAN CARLOS DE BARILOCHE", lat: -41.132293, lon: -71.304642 },
  { name: "BAHIA LOPEZ", lat: -41.074410, lon: -71.568569 },
  { name: "LAS PIEDRITAS", lat: -40.763253, lon: -71.640387 },
  { name: "RIO BONITO", lat: -40.789972, lon: -71.598495 },
  { name: "VILLA LA ANGOSTURA SEGUREL", lat: -40.782777, lon: -71.656518 },
  { name: "CERRO NEVADO", lat: -40.970833, lon: -71.712667 },
  { name: "PUESTO EL RINCON", lat: -40.725344, lon: -71.804198 },
  { name: "CERRO MIRADOR", lat: -40.718832, lon: -71.934903 }
];

const MapComponent = () => {
  return (
    <MapContainer center={[-40.0, -70.0]} zoom={6} style={{ height: '100vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((station, index) => (
        <Marker
          key={index}
          position={[station.lat, station.lon]}
          icon={new L.Icon({
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          })}
        >
          <Popup>{station.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
