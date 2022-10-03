import {
  createSlice,
  createAsyncThunk,
  AsyncThunkOptions,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

const apiUrl = "https://jsonplaceholder.typicode.com/users";
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const initialState = {
  users: [] as User[],
};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    });
  },
});

export const fetchAsyncGet = createAsyncThunk<User[], void>(
  "fetch/get",
  async () => {
    const res = await axios.get(apiUrl);
    return res.data;
  }
);

export const selectUsers = (state: RootState) => state.fetch.users;
export default fetchSlice.reducer;
