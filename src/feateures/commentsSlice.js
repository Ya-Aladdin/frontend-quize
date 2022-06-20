import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(
        `/comments/test/${id}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const commentsSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});


export default commentsSlice.reducer;