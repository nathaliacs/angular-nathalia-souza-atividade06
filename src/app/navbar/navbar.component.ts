import { Component, Input, OnInit } from "@angular/core";
import { TimerService } from "../timer.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent implements OnInit {
  @Input() name: string;

  constructor(public timer: TimerService) {
    this.timer.start(1000);
  }

  ngOnInit() {}
}
