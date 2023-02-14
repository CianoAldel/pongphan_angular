import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routePath: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.routePath = this.router.url;
    // console.log(this.router.url);
    
    console.log(this.route.snapshot.url)
  }
}
