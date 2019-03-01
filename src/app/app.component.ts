import { Component, OnInit } from '@angular/core';
import { latLng, LatLngExpression, marker, Marker, tileLayer } from 'leaflet';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'poa-leaflet';
	movingMarker = marker(latLng(51.2756228, 4.3345864));
	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
		],
		zoom: 12,
		center: latLng(51.2756228, 4.3345864)
	};
	layers = [this.movingMarker];

	ngOnInit(): void {
		setInterval(() => this.movingMarker.setLatLng(this.moveLatLngRandomly(this.movingMarker)), 100);
	}

	private moveLatLngRandomly(mapMarker: Marker): LatLngExpression {
		return [
			mapMarker.getLatLng().lat + 0.001 * (Math.random() - 0.5),
			mapMarker.getLatLng().lng + 0.001 * (Math.random() - 0.5),
		];
	}
}
