import { Component } from '@angular/core';
import { Section } from '../section/section';

@Component({
	selector: 'app-homepage',
	imports: [Section],
	templateUrl: './homepage.html',
	styleUrl: './homepage.css',
})
export class Homepage {}
