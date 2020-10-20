import { ApiResponse } from 'src/app/models/api-response';
import { BlogDto } from 'src/app/models/blog-dto';



export interface State {
    listBlogs: BlogDto[];
    isLoading: boolean;
    error: string;
    apiResponse: ApiResponse<any>;
}

export const initialState: State = {
    listBlogs: [],
    isLoading: false,
    error: null,
    apiResponse: {} as ApiResponse<any>
};
