import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const REGISTER_TYPE = "REGISTER_TYPE"

export interface RegisterForm {
    userId: string,
    email: string,
    password: string | any,
    toggle?: boolean,
    username: string,
    fullName: string,
    phoneNumber: number,
    gender: string
    umur: number,
    countryWantToStudy: string,
}

const initialState: RegisterForm = {
    userId: '',
    email: '',
    password: '',
    toggle: false,
    username: '',
    fullName: '',
    phoneNumber: 0,
    gender: '',
    umur: 0,
    countryWantToStudy: '',
}

export const RegisterFormSlice = createSlice({
    name: REGISTER_TYPE,
    initialState,
    reducers: {
        userId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload
        },
        email: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        password: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        toggleClick: (state, action: PayloadAction<boolean>) => {
            state.toggle = action.payload
        },
        username: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        fullName: (state, action: PayloadAction<string>) => {
            state.fullName = action.payload
        },
        phoneNumber: (state, action: PayloadAction<number>) => {
            state.phoneNumber = action.payload
        },
        gender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload
        },
        umur: (state, action: PayloadAction<number>) => {
            state.umur = action.payload
        },
        countryWantToStudy: (state, action: PayloadAction<string>) => {
            state.countryWantToStudy = action.payload
        },
    }
})

export const { email, password, toggleClick, username, fullName, phoneNumber, gender, umur, countryWantToStudy } = RegisterFormSlice.actions;
export const regiserFormSlice = (state: RootState) => state.chat;
export default RegisterFormSlice;