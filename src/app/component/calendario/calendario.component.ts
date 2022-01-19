import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'
import { dateToLocalArray } from '@fullcalendar/core/datelib/marker';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  
  constructor(private route: Router,
              private aroute: ActivatedRoute) { }

  ngOnInit(): void {}
   
   guardarUsuario () {

    const correo = document.getElementById
  }

}
