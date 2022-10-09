import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const COUNTRY_TYPE = "COUNTRY_TYPE"

export interface CountryName {
    name: string
}

const initialState: CountryName[] = [{
    name: ""
}]

export const CountryNameListSlice = createSlice({
    name: COUNTRY_TYPE,
    initialState,
    reducers: {
        name: (state, action: PayloadAction<CountryName>) => {
            state.push(action.payload)
        }
    }
})

export const { name } = CountryNameListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const countryNameListSlice = (state: RootState) => state.positions;
export default CountryNameListSlice.reducer;