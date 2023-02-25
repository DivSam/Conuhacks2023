import React from 'react'
import styled from 'styled-components'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Loading from '../Loading'
import Failed from '../Failed'
import { useRef } from 'react'
import { useEffect } from 'react'

const Section = styled.section`
  height: ${(props) => `calc(100vh - ${props.theme.navHeight} - 2rem)`};
  margin-bottom: 5px;
  width: 90vw;
  postion: relative;
  background: rgba(190, 212, 233, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.85);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display:flex;
  justify-content:center;
  align-items:center;
`;

const MapContainer = styled.div`
  height:100%;
  width:100%;
  background: rgba(190, 212, 233, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.85);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`

function MyMapComponent({ center, zoom }) {
  const ref = useRef()
  var currentInfoWindow = null;

  useEffect(() => {
    const map =
    new google.maps.Map(ref.current, {
      center,
      zoom,
      minZoom: 2,
      maxZoom: 20, 
      restriction: {
        latLngBounds: {
          north: 80,
          south: -80,
          west: -130,
          east: 130,
        },
      },
      zoomControl: true,
    })

    fetch("http://localhost:3000/api/getAll")
    .then(response => response.json())
    .then(data => {
      data.forEach((person) => {
        const marker = new window.google.maps.Marker({
          position: {lat: person.lat, lng: person.lng},
          map: map,
          title: person.name
        });
        const contentString = `<div id="content">` +
          `<div id="siteNotice">` +
          `</div>` +
          `<h1 id="firstHeading" class="firstHeading">${person.name}</h1>` +
          `<div id="bodyContent">` +
          `<p><b>Age:</b> ${person.age}</p>` +
          `<p><b>Location:</b> ${person.location}</p>` +
          `<p><b>Disease:</b> ${person.disease}</p>` +
          `<p><b>Verified:</b> ${person.verified}</p>` +
          `</div>` +
          `</div>`;
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          ariaLabel: `${person.name}`,
        });
        marker.addListener("click", () => {
          if (currentInfoWindow) {
            currentInfoWindow.close();
          }
          infowindow.open({
            anchor: marker,
            map,
          });
          currentInfoWindow = infowindow;
        });
        map.addListener("click", () => {
          infowindow.close();
        });
      });
    });
  })

  return <MapContainer ref={ref} id="map" />
}

const Map = () => {  
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Loading />;
      case Status.FAILURE:
        return <Failed />;
      case Status.SUCCESS:
        return <MapContainer />;
    }
  };
  

  return (
    <Section>
        <Wrapper apiKey={""} /*API KEY*/ render={render}>
          <MyMapComponent center={{ lat: 45.508888, lng: -73.561668 }} zoom={8}/>
        </Wrapper>
    </Section>
  )
}

export default Map