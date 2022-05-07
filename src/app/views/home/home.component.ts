import { Component, OnInit } from '@angular/core';
import { Lucas } from 'src/app/models/lucas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lucasModel = new Lucas("lucas99motta@hotmail.com", "lucas99")

  onSubmit(){
    console.log(this.lucasModel)
  }
}
