import { Component, OnInit } from '@angular/core';
import { ModelModule } from '../../Models/ModelModule';

@Component({
  selector: 'app-my-cambio',
  templateUrl: './my-cambio.component.html',
  styleUrls: ['./my-cambio.component.scss'],
})
export class MyCambioComponent implements OnInit {

  componentNumber: ModelModule.PCambio;
  constructor() { 
    
    this.componentNumber =  <ModelModule.PCambio>{};
  }

  ngOnInit() {}

}
