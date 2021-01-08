import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  extraClass: string;
  @Input('isFinish') isFinish: boolean;
  @Input('isStart') isStart: boolean;
  @Input('isWall') isWall: boolean;
  @Input('col') col: number;
  @Input('row') row: number;
  @Input('mouseIsPressed') mouseIsPressed: boolean;
  @Output('onMouseDown') onMouseDown = new EventEmitter<any>();
  //@Output('onMouseUp') onMouseUp = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.extraClass = this.isFinish ? 'node-finish' : this.isStart ? 'node-start' : this.isWall ? 'node-wall' : '';
  }

  onMDown(row, col) {
    this.onMouseDown.emit({ row, col });
  }

  // onMUp(value: boolean) {
  //   this.onMouseUp.emit(value);
  // }

}
