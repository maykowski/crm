import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-leads',
  templateUrl: './leads.component.html'
})
export class LeadsComponent implements OnInit {

  // heroes: Hero[] = [];

  // constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
