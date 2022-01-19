import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bienestar',
  templateUrl: './bienestar.component.html',
  styleUrls: ['./bienestar.component.css']
})
export class BienestarComponent implements OnInit {

  constructor(private route: Router,
    private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
