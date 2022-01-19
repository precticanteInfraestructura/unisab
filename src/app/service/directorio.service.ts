import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class DirectorioService {

  constructor(private auth: AngularFireAuth) {
    
  }

  login(user: string, pass: string){
    return this.auth.signInWithEmailAndPassword(user, pass);
  }
  
}
