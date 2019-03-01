import { Component, OnInit } from '@angular/core';
import { icon, latLng, LatLngExpression, marker, Marker, tileLayer } from 'leaflet';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'poa-leaflet';
	markers = [];
	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
		],
		zoom: 12,
		center: latLng(51.2756228, 4.3345864)
	};
	layers = [];

	ngOnInit(): void {
		for (let i = 0; i < 1000; i++) {
			const newMarker = marker(
				latLng(51.2756228 + 0.1 * (Math.random() - 0.5), 4.3345864 + 0.1 * (Math.random() - 0.5)),
				{
					icon: icon({
						iconSize: [ 20, 20 ],
						iconAnchor: [ 10, 10 ],
						iconUrl: './assets/ship.png',
					}),
				},
			);
			this.markers.push(newMarker);
			this.layers.push(newMarker);
		}
		setInterval(() => this.markers.forEach((m: Marker<any>) => m.setLatLng(this.moveLatLngRandomly(m))), 10);
	}

	private moveLatLngRandomly(mapMarker: Marker): LatLngExpression {
		return [
			mapMarker.getLatLng().lat + 0.001 * (Math.random() - 0.5),
			mapMarker.getLatLng().lng + 0.001 * (Math.random() - 0.5),
		];
	}
}
