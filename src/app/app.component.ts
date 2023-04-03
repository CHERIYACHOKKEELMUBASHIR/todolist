import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos:Todo[]=[];
  newTodo:string;
  updateflag:boolean=false
  newupdate:string
  updateid:number


  saveTodo(){
    if(this.newTodo){

      let todo=new Todo();
      todo.name=this.newTodo
      this.todos.push(todo);
      this.newTodo='';

    }else{

      alert("Please Enter Todos")

    }
  }


  remove(id:number){
    this.todos=this.todos.filter((v,i)=>i !==id);
  }

  
  updateTodo(){
    if(this.newupdate){
      let todo=new Todo();
      let id=this.updateid
      todo.name=this.newupdate
      this.todos[id]=todo
      this.newupdate=""
      this.updateflag=false
    }
  }

  edit(id:number){
    this.updateflag=true
    this.updateid=id
  }
}
