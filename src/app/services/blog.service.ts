import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogDto } from '../models/blog-dto';
import { ApiResponse } from '../models/api-response';
import { QueryListResponse } from '../models/query-list-response';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BaseService {

  // tslint:disable-next-line:variable-name
  private API_Blogs = `${this.API_BASE_URL}/Blog`;

  constructor(private http: HttpClient) {
    super();
  }

  getListBlogs(params: any) {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    return this.http
      .get<ApiResponse<QueryListResponse<BlogDto>>>(`${this.API_Blogs}`, { params })
      .pipe(map(result => result), catchError(e => throwError(e.error)));
  }
}
