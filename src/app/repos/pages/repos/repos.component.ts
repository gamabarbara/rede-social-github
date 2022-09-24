import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  readonly apiURL : string;
  constructor( private http : HttpClient) { 
    this.apiURL = 'http://localhost:3000';
  }

  ngOnInit(): void {
  }

  listarTodosProdutos() {
    this.http.get(`${ this.apiURL }/produtos`).subscribe();
  }
}
