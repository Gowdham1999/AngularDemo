import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sm02-home-page',
  templateUrl: './sm02-home-page.component.html',
  styleUrls: ['./sm02-home-page.component.scss']
})
export class Sm02HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
}
