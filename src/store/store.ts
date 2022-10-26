import { configureStore } from '@reduxjs/toolkit'
import ChatContent from './ChatContent';
import { ClickedSlice } from './Clicked';
import { CountryNameListSlice } from './CountryList';
import { PositionSlice } from './positionSlice';
import RegisterFormSlice from './RegisterForm';

export const store = configureStore({
    reducer: {
        positions: PositionSlice.reducer,
        countryList: CountryNameListSlice.reducer,
        ClickedSlice: ClickedSlice.reducer,
        chat: ChatContent.reducer,
        register: RegisterFormSlice.reducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
