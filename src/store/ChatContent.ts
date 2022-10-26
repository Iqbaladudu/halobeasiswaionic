import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const CHAT_CONTENT_TYPE = "CHAT_CONTENT_TYPE"

export interface Chat {
    content: string | null | undefined;
}

const initialState: Chat = {
    content: ""
}

export const ChatContent = createSlice({
    name: CHAT_CONTENT_TYPE,
    initialState,
    reducers: {
        message: (state, action: PayloadAction<string | any>) => {
            state.content += action.payload
        },
        clear: (state) => {
            state.content = ""
        }
    }
})

export const { message, clear } = ChatContent.actions;
export const chatContent = (state: RootState) => state.chat;
export default ChatContent;