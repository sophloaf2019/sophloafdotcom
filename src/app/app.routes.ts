import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Blog } from './blog/blog';
import { Music } from './music/music';
import { Code } from './code/code';
import { About } from './about/about';
import { Writing } from './writing/writing';

export const routes: Routes = [
	{
		path: '',
		component: Homepage,
		children: [
			{
				path: '',
				component: About,
			},
			{
				path: 'blog',
				component: Blog,
			},
			{
				path: 'writing',
				component: Writing,
			},
			{
				path: 'music',
				component: Music,
			},
			{
				path: 'code',
				component: Code,
			},
		],
	},
];
