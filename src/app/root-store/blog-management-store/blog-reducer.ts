import { createReducer, on } from '@ngrx/store';
import { loadedBlogSuccess } from './blog-actions';

export const initialState = {
    results: null
};

const reducer = createReducer(
    initialState,
    on(loadedBlogSuccess, (state, action) => {
        return ({ ...state, results: action.results });

    })
);

export function blogReducer(state, action) {
    return reducer(state, action);
}
