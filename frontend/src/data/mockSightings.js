import airnzPhoto from '@assets/images/787-airnz.jpeg'
import qantasPhoto from '@assets/images/a321xlr-qantas.avif'
import atrPhoto from'@assets/images/atr-photo.jpg'

export const initialSightings = [
{
id: 1,
registration: "ZK-NZE",
aircraftType: "Boeing 787-9",
aircraftPhoto: airnzPhoto,
airport: "Wellington Airport",
spotter: "Hyacinthe"
},
{
id: 2,
registration: "VH-OGA",
aircraftPhoto: qantasPhoto,
aircraftType: "Airbus A321XLR",
airport: "Melbourne Tullamarine",
spotter: "Alex"
},
{id: 3,
registration: "ZK-MVA",
aircraftPhoto: atrPhoto,
aircraftType: "ATR 72-600",
airport: "Christchurch Airport",
spotter: "Jamie"
}

];
