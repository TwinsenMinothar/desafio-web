import { catchError } from 'rxjs/operators';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  constructor(private http: HttpClient) {}
  private JsonUrl = 'https://jsonplaceholder.typicode.com/posts/';

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.JsonUrl)
      .pipe(catchError(this.handleError<Post[]>('getPosts', [])));
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.JsonUrl}/${id}`;
    return this.http
      .get<Post>(url)
      .pipe(catchError(this.handleError<Post>('getPost')));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
