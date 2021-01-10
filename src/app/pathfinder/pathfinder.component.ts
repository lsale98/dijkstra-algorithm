import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { dijkstra, getNodesInShortPathOrder } from '../algorithm/Dijkstra';

@Component({
  selector: 'app-pathfinder',
  templateUrl: './pathfinder.component.html',
  styleUrls: ['./pathfinder.component.scss']
})
export class PathfinderComponent implements OnInit {

  START_NODE_ROW: number = 10;
  START_NODE_COL: number = 10;
  FINISH_NODE_ROW: number = 10;
  FINISH_NODE_COL: number = 39;
  mouseIsPressed: boolean = false;
  grid: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.getInitialGrid();
  }

  reset() {
    this.grid = [];
    this.getInitialGrid();
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {

    for (let i = 0; i <= visitedNodesInOrder.length; i++){
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
        }, 10 * i);
    }
    
  }


  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++){
       setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-shortest-path';
        }, 10 * i);
    }
  }

  visualDijkstra() {
    const startNode = this.grid[this.START_NODE_ROW][this.START_NODE_COL];
    const finishNode = this.grid[this.FINISH_NODE_ROW][this.FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(this.grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  handleMouseDown(row,col) {
    const newGrid = this.getNewGridWithWallToggled(this.grid, row, col);
    this.grid = newGrid;
  }

  getInitialGrid() {
    for (let row = 0; row < 20; row++){
      const currentRow = [];
      for (let col = 0; col < 50; col++){
        currentRow.push(this.createNode(row,col));
      }
      this.grid.push(currentRow);
    }
    return this.grid;
  }

  createNode(row, col) {
    return {
      col,
      row,
      isStart: row == this.START_NODE_ROW && col == this.START_NODE_COL,
      isFinish: row == this.FINISH_NODE_ROW && col == this.FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null
    }
  }

  getNewGridWithWallToggled(grid, row, col) {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall
    };
    newGrid[row][col] = newNode;
    return newGrid;
  }

}
