import { Component, OnInit  } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'



@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  title = 'Hello app!';
  newTittle:string= "";
  listOfTodo:string[];
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http){}

  ngOnInit(): void {
    this.getTodo();
    console.log('uruchamiam sie')
  }


  addTodo(){
    if(this.newTittle !== '')
    {
    this.http.post('http://localhost:8000/api/todos',{text:this.newTittle},this.headers)
    .toPromise()
    .then(()=>{console.log('post');this.getTodo();})
    .catch(()=>{console.log('blad')});
    this.newTittle = '';

  };
  }

  getTodo(){
    console.log('t1');

    this.http.get('http://localhost:8000/api/todos',)
        .toPromise()
        .then(response => {
             this.listOfTodo = response.json();

        })
        .catch(()=>{console.log('blad pobierania')});
  };

  delTodo(todo_id){
    console.log(todo_id)
    this.http.delete('http://localhost:8000/api/todos/'+todo_id)
      .toPromise()
      .then(() =>{ null;this.getTodo();})
        .catch(()=>{console.log('blad usuwania')});

  };
}
