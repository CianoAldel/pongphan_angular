import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routePath: string;
  @Input() textNav: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.textNav = 'รายการข้อมูลจังหวัด';
  }
}
