import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aplicativos',
  templateUrl: './aplicativos.component.html',
  styleUrls: ['./aplicativos.component.css']
})
export class AplicativosComponent implements OnInit {

  constructor(private route: Router,
    private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
