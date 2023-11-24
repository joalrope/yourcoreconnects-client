import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IChat } from "../../../interface";

const initialState: IChat = {
  connectedUsers: {},
  conversations: [
    {
      id: "",
      names: "",
      picture: "",
      info: "",
    },
  ],

  chatMessages: [],
  receiverId: "",
  room: "",
  senderId: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setReceiverId: (state, { payload }) => {
      state.receiverId = payload;
    },
    setSenderId: (state, { payload }) => {
      state.senderId = payload;
    },
    setRoom: (state, { payload }) => {
      state.room = payload;
    },
    setConversations: (state, { payload }) => {
      state.conversations = payload;
    },
    setChatMessages: (state, { payload }) => {
      state.chatMessages = payload;
    },
    setAddChatMessage: (state, { payload }) => {
      state.chatMessages = [...state.chatMessages, payload];
    },
    setConnectedUsers: (state, { payload }) => {
      state.connectedUsers = payload;
    },
  },
});

export const {
  setSenderId,
  setReceiverId,
  setChatMessages,
  setAddChatMessage,
  setConversations,
  setRoom,
  setConnectedUsers,
} = chatSlice.actions;

export const selectChat = (state: RootState) => state.chat;
