import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title: string = 'platzy-store';
  power: number = 10;
  nombres: any = ['nicolas', 'andres', 'mariana'];
  error: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  addNombre(){
    if(this.nombres.indexOf(this.title) === -1){
      this.nombres.push(this.title);
      this.error = '';
    }else{
      this.error = 'El nombre ya existe';
    }
  }
  
  deleteNombre(index: number){
    this.nombres.splice(index, 1);
  }

}
