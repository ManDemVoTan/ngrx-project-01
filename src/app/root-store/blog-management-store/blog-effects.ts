
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { BlogService } from './../../services/blog.service';
import { loadBlogs, loadedBlogSuccess } from './blog-actions';
@Injectable()
export class BlogStoreEffects {
    constructor(private blogService: BlogService, private actions$: Actions) {
    }

    @Effect()
    LoadBlogs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBlogs),
            exhaustMap(x => {
                return this.blogService.getListBlogs(null)
                    .pipe(map(y => {
                        return loadedBlogSuccess({ results: y });
                    }));
            })
        )
    );
}
