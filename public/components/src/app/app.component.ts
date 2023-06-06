import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { userService } from 'services/userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //variables
  viewRes: any;

  constructor(private service: userService) { }

  ngOnInit(): void {
    // Lógica de inicialización
    this.traerUsuarios()
  }

   traerUsuarios(){
    this.service.obtenerUsuarios().subscribe({
      next: res => {
        this.viewRes = res
      },
      error: err => {
        alert(err.error)
      }
    })
  }
}
