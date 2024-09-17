"use client"

import React,{useMemo,useEffect,useRef,useState} from "react"
import {LatLong} from "@/types"
import {useJsApiLoader} from '@react-google-maps/api'
import Library from "@googlemaps/js-api-loader";
import { Button } from "react-native";

import {GoogleMap,Marker,useLoadScript,Circle,StandaloneSearchBox} from '@react-google-maps/api'

const GoogleMaps =({
    radius,
    setLatitude,
    style,
    address,
    setAddress,
    latitude,
    longitude,
    setLongitude
})=>{
    const [map,setMap] = useState(null)

    const {isLoaded} = useLoadScript({
        googleMapsApiKey:process.env.NEXT_PUBLIC_MAPS_API ,
        libraries: ["places"]
    })

    const center = useMemo(()=>({lat:latitude, lng:latitude}),[latitude,longitude])

    const changeCoordinate = (coord, index)=>{
        const{latlng} = coord;
        const lat = latlng.lat()
        const lng = latlng.lng()
        setLatitude(lat)
        setLongitude(lng)
    }

    useEffect(()=>{
        map?.panTo({lat: latitude,lng:longitude})
    },[latitude,longitude])

    const inputRef = useRef()

    const handlePlaceChanged =()=>{
        const place = inputRef.current.getPlaces();

        if (place) {
            setAddress(place.formatted_address)
            setLatitude(place.geometry.location.lat())
            setLongitude(place.geometry.location.lng())
        }
    }
}

export function Map(){
    const center = useMemo(()=>({lat:latitude, lng:latitude}),[latitude,longitude])
    return(
        <div className="w-full h-96">
            {
                !isLoaded?(<h1>Loading...</h1>):
                (<GoogleMap mapContainerClassName="map-container"
                center={center}
                zoom={10}
                onLoad={(map)=>setMap(map)}>
                
                    <StandaloneSearchBox
                    onLoad={(ref)=>(inputRef.current = ref)}
                    onPlacesChanged={handlePlaceChanged}>
                        <div className="relative ml-48 mt-[10px] w-[500px]">
                            <input
                             type="text"
                             className={'form-control text-black rounded-full bg-white ${style}'}
                             value={address}
                             placeholder="Enter your address"
                             onChange={(e)=>setAddress(e.target.value)}
                            />
                        </div>

                    </StandaloneSearchBox>

                    <Button 
                    className="z-50 flex justify-center items-center w-12 h-12 transition duration-300 rounded-full hover:bg-stone-200 bg-stone-100 border-2 border-cyan-400 absolute right-[60px] top-[17px]"
                    onClick={()=>map.panTo({lat: latitude, lng: longitude})}
                    >
                        <span className="text-xs text-black">
                            Click me!
                        </span>
                    </Button>

                    <Marker
                    draggable
                    animation={google.maps.Animation.DROP}
                    onDragEnd={changeCoordinate}
                    position={{lat:latitude,lng:longitude}}/>

                    <Circle
                    options={{
                        fillColor:'#ff0000',
                        strokeOpacity:0.8,
                        strokeColor:'#ff0000',
                        strokeWeight:2,
                        fillOpacity:0.35,
                    }}/>
                    
                </GoogleMap>)
            }
        </div>
    )    
}