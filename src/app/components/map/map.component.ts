import { Component, AfterViewInit } from '@angular/core';
import { MarkerService } from 'src/app/services/marker.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

const iconRetinaUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
const iconUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
const shadowUrl = '';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [30, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 22.518, 88.3832 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 12,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    L.Routing.control({
      waypoints: [
        L.latLng(22.518, 88.3832),
        L.latLng(22.420, 88.3500)
      ],
      router: new L.Routing.osrmv1({
        language: 'en',
        profile: 'car'
      }),
      lineOptions: {styles: [{color: '#3498DB', weight: 4}]},
    }).addTo(this.map);

    if(document.getElementsByClassName('leaflet-routing-container leaflet-bar leaflet-routing-collapsible leaflet-control').item(0))
    {
      document.getElementsByClassName('leaflet-routing-container leaflet-bar leaflet-routing-collapsible leaflet-control').item(0).replaceWith('');
    }
    if(document.getElementsByClassName('leaflet-routing-container leaflet-bar leaflet-control').item(0))
    {
      document.getElementsByClassName('leaflet-routing-container leaflet-bar leaflet-control').item(0).replaceWith('');
    }
  }

  constructor(private markerService:MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap(); 
  }
}

