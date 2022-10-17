import { configureStore } from '@reduxjs/toolkit'
import { ClickedSlice } from './Clicked';
import { CountryNameListSlice } from './CountryList';
import { PositionSlice } from './positionSlice';

export const store = configureStore({
    reducer: {
        positions: PositionSlice.reducer,
        countryList: CountryNameListSlice.reducer,
        ClickedSlice: ClickedSlice.reducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
