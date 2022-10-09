import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const POSITION_TYPE = "POSITION_TYPE"

export interface Position {
    position: number;
}

const initialState: Position = {
    position: 1,
}

export const PositionSlice = createSlice({
    name: POSITION_TYPE,
    initialState,
    reducers: {
        increment: (state) => {
            state.position += 1
        },
        decrement: (state) => {
            state.position -= 1
        }
    }
})

export const { increment, decrement } = PositionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const positionSlice = (state: RootState) => state.positions;
export default PositionSlice.reducer;