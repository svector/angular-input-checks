import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bob',
  templateUrl: './bob.component.html',
  styleUrls: ['./bob.component.css'],
})
export class BobComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input()
  public bobCount: number = 0;
}
