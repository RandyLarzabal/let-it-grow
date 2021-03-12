import {Injectable} from '@angular/core';
import {IPost} from "./posts.interface";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  allPosts(): IPost[] {
    return this.posts$.getValue()
  }

  getPostsbyUser(ownerId): IPost[] {
    return this.posts$.getValue().filter(value => value === ownerId)
  }

  getPosts(id): IPost {
    return this.posts$.getValue()[0]
  }

  addPosts(propriete) {
    this.posts$.next([...this.posts$.getValue(), propriete])
  }


  private posts: IPost[] = [{
    id: "1",
    describe: "lorem",
    created: "17 mars 2020",
    content: "lorem ipsum",
    title: "post1"
  }, {
    id: "1",
    describe: "lorem",
    created: "17 mars 2020",
    content: "lorem ipsum",
    title: "post1"
  },{
    id: "1",
    describe: "lorem",
    created: "17 mars 2020",
    content: "lorem ipsum",
    title: "post1"
  }, {
    id: "1",
    describe: "lorem",
    created: "17 mars 2020",
    content: "lorem ipsum",
    title: "post1"
  },{
    id: "1",
    describe: "lorem",
    created: "17 mars 2020",
    content: "lorem ipsum",
    title: "post1"
  }, {
    id: "1",
    describe: "lorem",
    created: "17 mars 2020",
    content: "lorem ipsum",
    title: "post1"
  }]

  public posts$: BehaviorSubject<IPost[]> = new BehaviorSubject(this.posts);

  constructor() {
  }
}
