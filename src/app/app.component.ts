import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'poa-leaflet';
	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
		],
		zoom: 12,
		center: latLng(51.2756228, 4.3345864)
	};
}
