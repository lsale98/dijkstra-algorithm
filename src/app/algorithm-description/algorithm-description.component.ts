import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithm-description',
  templateUrl: './algorithm-description.component.html',
  styleUrls: ['./algorithm-description.component.scss']
})
export class AlgorithmDescriptionComponent implements OnInit {

  isHelpOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeHelp() {
    this.isHelpOpen = false;
  }

  openHelp() {
    this.isHelpOpen = true;
  }

}
