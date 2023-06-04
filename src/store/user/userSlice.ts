import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { User } from '@/types/user';
import { fetchAllUsers, fetchUserById } from './userAPI';


type UserState = {
  userData: User | undefined,
  userList: User[],
  status: 'idle' | 'loading' | 'failed',
}

const initialState: UserState = {
  userData: undefined,
  userList: [],
  status: 'idle',
};

export const fetchUsersWithThunk = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    const response = await fetchAllUsers();
    return response;
  }
);

export const fetchUserWithThunk = createAsyncThunk(
  'user/fetchUser',
  async (id: number) => {
    const response = await fetchUserById(id);
    return response;
  }
);


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersWithThunk.pending, (state: UserState) => {
        state.status = 'loading';
      })
      .addCase(fetchUserWithThunk.fulfilled, (state: UserState, action: PayloadAction<User | undefined>) => {
        state.status = 'idle';
        if (action.payload) {
          state.userData = action.payload;
        }
      })
      .addCase(fetchUserWithThunk.rejected, (state: UserState) => {
        state.status = 'failed';
      })
  },
});

export const { } = userSlice.actions;
//кастомный селект
export const selectUser = (state: RootState) => state.user.userData;
export const selectUsers = (state: RootState) => state.user.userList;
export const selectUserReqStatus = (state: RootState) => state.user.status;
export default userSlice.reducer;