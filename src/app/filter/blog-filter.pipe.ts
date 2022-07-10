import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from "../dto/IPost";

@Pipe({
  name: 'blogFilter'
})
export class BlogFilterPipe implements PipeTransform {

  transform(posts: IPost[], search: string): IPost[] {
    search = search?.trim();
    if (posts.length === 0 || !search) {
      return posts;
    }
    const searchParts = search.toLowerCase().split(" ");
    posts = BlogFilterPipe.filterPosts(posts, searchParts);
    return posts;
  }

  private static filterPosts(posts: IPost[], searchParts: string[]) {
    return posts.filter(p =>
      searchParts.some(s =>
          (BlogFilterPipe.includes(p.title.rendered, s) ||
            BlogFilterPipe.includes(p.content.rendered, s))
        //ToDo Filter with Tags$
      )
    )
  }

  private static includes(input: string, search: string) {
    return input?.toLowerCase().includes(search);
  }

}
