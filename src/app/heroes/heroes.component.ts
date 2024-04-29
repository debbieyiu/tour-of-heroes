import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  // hero = 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
