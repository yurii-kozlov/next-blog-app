import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PostsService from 'services/PostsService';
import { Post } from 'types/Post';

export interface InitialState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  posts: [],
  isLoading: false,
  error: null,
}

export const getPosts = createAsyncThunk<Post[]>(
  'posts/getPosts',
  async (_args, thunkAPI) => {
    try {
      const posts = await PostsService.getPosts();

      return posts;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const getPostsBySearch = createAsyncThunk(
  'posts/getPostsBySearch',
  async (searchQuery: string, thunkAPI) => {
    try {
        const foundPosts = await PostsService.getPostsBySearch(searchQuery);

        return foundPosts;
    } catch (error) {
        if (error instanceof Error) {
          return thunkAPI.rejectWithValue(error.message);
        }

        return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getPostsBySearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostsBySearch.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPostsBySearch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
  }
});

export const { actions } = postsSlice;
export default postsSlice.reducer;
