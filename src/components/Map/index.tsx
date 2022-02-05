import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, useMapEvent} from 'react-leaflet'
import Leaflet, { LatLngExpression } from 'leaflet'
import { useState } from 'react'
import * as S from './styles'
import mapPinIcon from '../../assets/icons/map-pin.svg'

const mapIcon = Leaflet.icon({

    iconUrl:mapPinIcon,
    iconSize:[30,30]

})
type OnClickFn = (latitude:number,longitude:number)=>void
type MapProps={
    latitude?:number
    onClick?:OnClickFn
    longitude?:number
}
type MyComponentProps={
    onClick:OnClickFn
}
const MyComponent=({onClick}:MyComponentProps)=>{
    useMapEvent('click',({latlng})=>{
        onClick(latlng.lat,latlng.lng)
    })
    return null
}
const Map = ({latitude,longitude,onClick}:MapProps)=> {
const [position,setPosition]=useState<LatLngExpression>()
const center:LatLngExpression= latitude&&longitude?[latitude,longitude]:[45.4,-75.7]
const handleClick=(latitude:number,longitude:number)=>{
    if(onClick){
        setPosition([latitude,longitude])
        onClick(latitude,longitude)
    }
}
    return(
        <S.Container>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer 
                attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url='https://api.mapbox.com/styles/v1/mikhaelzin/ckytcnxsr000b14lcm92ff1fm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWlraGFlbHppbiIsImEiOiJja3l0Y2x6YmoxY2szMnFvOWJ5Zno4NGRiIn0.o9E0Zoz6xVSIwrrtprsAyA'
                />
                <MyComponent onClick={handleClick}/>
                {latitude && longitude && !position && <Marker icon={mapIcon} position={[latitude,longitude]}/>}
                {position && <Marker icon={mapIcon} position={position}/>}
            </MapContainer>
        </S.Container>
    )

}

export default Map



