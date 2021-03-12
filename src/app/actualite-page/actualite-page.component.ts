import {Component, OnInit} from '@angular/core';
import {PostsService} from "./posts.service";
import {Subscription} from "rxjs";
import {IPost} from "./posts.interface";

@Component({
  selector: 'app-actualite-page',
  templateUrl: './actualite-page.component.html',
  styleUrls: ['./actualite-page.component.scss']
})
export class ActualitePageComponent implements OnInit {

  constructor(private PostsService: PostsService) {
  }

  private subscription: Subscription;
  posts: IPost[];


  ngOnInit(): void {
    this.subscription = this.PostsService.posts$.subscribe(() => {
      this.posts = this.PostsService.posts$.getValue()
    })
  }

}
