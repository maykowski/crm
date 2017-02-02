import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-accounts',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {

  // heroes: Hero[] = [];

  // constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
