import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from "../../dto/posts/IPost";

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(posts: IPost[], search: string, minInputLength: number = 2): IPost[] {
    search = search?.trim();
    const validation = ContentFilterPipe.validateInput(posts, search, minInputLength);
    if (!validation.filter)
      return <IPost[]>validation.returnValue;

    const searchParts = search.toLowerCase().split(" ");
    posts = ContentFilterPipe.filterPosts(posts, searchParts);
    return posts;
  }

  private static validateInput(posts: IPost[], search: string, minInputLength: number) {
    if (posts.length === 0 || !search) {
      return {filter: false, returnValue: posts}
    }
    if (search.length < minInputLength) {
      return {filter: false, returnValue: []}
    }
    return {filter: true}
  }

  private static filterPosts(posts: IPost[], searchParts: string[]) {
    return posts.filter(p =>
      searchParts.some(s =>
          (ContentFilterPipe.includes(p.title.rendered, s) ||
            ContentFilterPipe.includes(p.content.rendered, s))
        //ToDo Filter with Tags$
      )
    )
  }

  private static includes(input: string, search: string) {
    return input?.toLowerCase().includes(search);
  }

}
