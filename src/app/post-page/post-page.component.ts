import { Component, OnInit } from '@angular/core';
import { PostsService} from '../actualite-page/posts.service'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  constructor(private PostsService: PostsService) { }

  ngOnInit(): void {
  }

}
