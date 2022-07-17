import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  ngOnInit(): void {}
}
