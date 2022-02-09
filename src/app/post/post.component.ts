import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  mensajes: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.mensajes = this.dataService.getPost();
    //.subscribe( (post: any []) => {
    //  console.log(post);
    //  this.mensajes=post;
   // });
  }

}
