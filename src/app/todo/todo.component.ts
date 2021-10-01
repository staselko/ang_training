import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Todo {
  title: string,
  id?: number,
  time: Date
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todos: Array<Todo> = [
    {
      title: 'Task',
      time: new Date(),
      id: 0
    }
  ]

  addingInput = ''
  form: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      todoName: new FormControl('')
    })
  }

  addTodo() {
    if (this.form.value.todoName != '') {
      this.todos.push({
        title: this.form.value.todoName,
        time: new Date(),
        id: this.todos.length
      })
    }
    this.addingInput = ''
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(item => item.id != id)
  }

  redactMenu: number
  redactText = ''

  redactTodo(id) {
    // this.redactMenu = true
    let item = this.todos.filter(item => item.id == id)
    this.redactText = item[0].title
    console.log(document.getElementById(`todo-item${id}`))
    this.redactMenu = id
  }

  agreeTodo(id) {
    this.todos.forEach(item => {
      if (item.id == id) {
        item.title = this.redactText
        item.time = new Date()
      }
    })
    // this.redactMenu = false
  }
}
