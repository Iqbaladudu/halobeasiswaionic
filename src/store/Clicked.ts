import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const CLICK_TYPE = "CLICK_TYPE"

export interface Click {
    isClicked: boolean;
    clickPos: number
}

const initialState: Click = {
    isClicked: false,
    clickPos: 0
}

export const ClickedSlice = createSlice({
    name: CLICK_TYPE,
    initialState,
    reducers: {
        toggle: (state, action: PayloadAction<number>) => {
            state.isClicked = !state.isClicked
            state.clickPos = action.payload
        },
    }
})

export const { toggle } = ClickedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const clickedSlice = (state: RootState) => state.ClickedSlice;
export default ClickedSlice.reducer;