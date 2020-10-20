
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ApiResponse } from 'src/app/models';
import { State } from './../root-state';
const selectStateblog = (state: State) => state.blogManagement;

export const selectBlog = createSelector(
    selectStateblog,
    (state) => state,
);

export const selecApitBlog = createSelector(
    selectStateblog,
    (state) => state.apiResponse,
);



export const selectPrefixManagementApiResponse: MemoizedSelector<
    object,
    ApiResponse<any>
> = createSelector(selectStateblog, (state) => state.apiResponse);




