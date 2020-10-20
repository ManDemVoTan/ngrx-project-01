import { createAction, props } from '@ngrx/store';
import { BlogDto } from './../../models/blog-dto';

export const loadBlogs = createAction(
    '[Blog] loadBlogs',
);

export const loadedBlogSuccess = createAction(
    '[BLOG] loaded blog success',
    props<{ results: any }>()
);

export const loadedBlogFail = createAction(
    '[BLOG] loaded blog fail',
    props<{ error: any }>()
);

export const errorBlogAdd = createAction(
    '[BLOG] error blog requesst',
    props<{ error: any }>()
);

export const AddBlogSuccess = createAction(
    '[BLOG] error blog requesst',
    props<{ model: BlogDto[] }>()
);
