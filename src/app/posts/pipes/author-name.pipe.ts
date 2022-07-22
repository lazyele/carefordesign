import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {
  private static authors = new Map<number, string>([
    [1, 'Alessia',],
    [2, 'Sesea']
  ]);

  transform(authorId: number): string {
    return (AuthorNamePipe.authors.has(authorId)
      ? AuthorNamePipe.authors.get(authorId)
      : 'Unbekannt') ?? '';
  }
}
