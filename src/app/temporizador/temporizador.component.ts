import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {

  intervaloTemporizador= 1;  

  constructor(public timer: TimerService) {
    this.timer.start(1000);
  }

  ngOnInit() {
  }

}