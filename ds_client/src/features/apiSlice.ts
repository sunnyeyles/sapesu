import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
type MessageType = {
  id?: string
  message: string
  createdAt?: string
}

const API_URL = 'http://127.0.0.1:3001/api/'

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  tagTypes: ['Messages'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getAllMessages: builder.query<MessageType[], void>({
      query: () => 'get-messages',
      providesTags: ['Messages'],
    }),
    addNewMessage: builder.mutation<MessageType, MessageType>({
      query: (message) => ({
        url: 'post-message',
        method: 'POST',
        body: message,
      }),
      invalidatesTags: ['Messages'],
    }),
  }),
})

export const { useGetAllMessagesQuery, useAddNewMessageMutation } = messagesApi
