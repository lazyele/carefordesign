import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from "../../dto/posts/IPost";

@Pipe({
  name: 'authorReducer'
})
export class AuthorReducerPipe implements PipeTransform {

  transform(posts: IPost[]): number[] {
    return [...new Set(posts?.map(p => p.author))]
  }

}
