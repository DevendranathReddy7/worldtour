import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { StyledSideBar } from "../../StyledComponnets/Styles"
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet"
import { useState } from "react"
import { useCities } from "../../Context/CityContext"
const Map = () => {

    const navigate = useNavigate()
    const [mapPosition, setMapPosition] = useState([40.12, 123.0])
    const { cities } = useCities()
    const [searchParams, setSearchParams] = useSearchParams({})
    const mapLat = searchParams.get('lat')
    const mapLng = searchParams.get('lng')
    return (
        <div onClick={() => navigate('form')}>
            <StyledSideBar>

                <MapContainer center={[mapLat || 40, mapLng || 50]} zoom={3} scrollWheelZoom={true} style={{ height: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                    />
                    {cities.map(city => {
                        <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
                            <Popup>
                                <span>{city.cityName}</span>
                            </Popup>
                        </Marker>
                    }
                    )}
                    <ChangeCenter position={mapPosition} />
                </MapContainer>

            </StyledSideBar>
        </div>

    )
}

function ChangeCenter({ position }) {
    const map = useMap()
    map.setView(position)
    return null
}
export default Map