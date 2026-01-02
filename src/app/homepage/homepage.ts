import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-homepage',
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './homepage.html',
	styleUrl: './homepage.css',
})
export class Homepage {}
