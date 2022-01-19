import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {

  constructor(private route: Router,
    private aRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.getDaysFromDate(11,2020)
   }
   week: any = [
     "Lunes",
     "Martes",
     "Miercoles",
     "Jueves",
     "Viernes",
     "Sabado",
     "Domingo"
   ];
 
   monthSelect: any[];
   dateSelect: any;
 
   
 
  
   getDaysFromDate(month, year) {
 
     const startDay = moment.utc(`${year}/${month}/01`)
     const endDay = startDay.clone().endOf('month')
     this.dateSelect = startDay;
     const diffDays = endDay.diff(startDay, 'days', true)
     const numberDays  = Math.round(diffDays);
 
     const arrayDays = Object.keys([...Array(numberDays)]).map((a: any)=>{
       a = parseInt(a) + 1;
       const dayObject = moment(`${year}-${month}-${a}`);
       return{
         name: dayObject.format("dddd"),
         value: a,
         indexWeek: dayObject.isoWeekday()
       };
     });
 
     this.monthSelect = arrayDays
   }
 
   changeMonth(flag) {
     if (flag < 0) {
       const prevDate = this.dateSelect.clone().subtract(1,"month");
       this.getDaysFromDate(prevDate.format("MM"),prevDate.format('YYYY'));
     }else{
       const nextDate = this.dateSelect.clone().add(1, "month");
       this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
     }
 
   }
   clickDay(day) {
     const monthYear = this.dateSelect.format('YYYY-MM')
     const parse = `${monthYear}-${day.value}`
     const objectDate = moment(parse)
     console.log(objectDate);
   }

}
