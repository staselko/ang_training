import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  winningCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  ids = []
  mark = true
  circles = []
  crosses = []
  winner = ''
  score = {
    crosses: 0,
    circles: 0
  }
  resetButton = false
  winnerCheck() {
    if (!this.mark) {
      this.crosses.sort()
      this.winningCombs.forEach((item) => {
        if (this.contains(this.crosses, item)) {
          this.winner = 'cross'
          this.endGame()
          this.score.crosses++
        }
      });
    }
    else {
      this.circles.sort()
      this.winningCombs.forEach((item) => {
        if (this.contains(this.circles, item)) {
          this.winner = 'circle'
          this.endGame()
          this.score.circles++
        }
      });
    }
  }

  endGame() {
    if (this.winner) {
      
    }
    document.getElementById('game-page__board-table').style.pointerEvents = 'none'
    this.resetButton = true
  }

  addMark(event) {
    let cellId = event.path[0].attributes.id.value
    cellId = Number(cellId)
    if (this.ids.includes(cellId)) {
      return
    }
    if (this.mark) {
      document.getElementById(cellId).classList.add( 'cross')
      this.crosses.push(cellId)
    } else {
      document.getElementById(cellId).classList.add( 'circle')
      this.circles.push(cellId)
    }
    this.mark = !this.mark
    this.ids.push(cellId)
    this.circles.sort()
    this.winnerCheck()
  }

  contains(where, what) {
    for (let i = 0; i < what.length; i++) {
      if (where.indexOf(what[i]) == -1) return false;
    }
    return true;
  }

  resetField() {
    this.ids.forEach(item => {
      document.getElementById(`${item}`).className = ''
      
    })
    document.getElementById('game-page__board-table').style.pointerEvents = 'all'
    this.circles = []
    this.crosses = []
    this.ids = []
    this.mark = true
    this.resetButton = false
  }


}
