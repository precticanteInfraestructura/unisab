import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectorioService } from 'src/app/service/directorio.service';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router,
    private aRoute: ActivatedRoute,
    private auth: DirectorioService
   ) { }

  ngOnInit(): void {
  }
  async login(user: string, pass: string){
    try {
      await this.auth.login(user, pass);
    } catch (e: any){
      alert(e.message);
    }
  }

}
