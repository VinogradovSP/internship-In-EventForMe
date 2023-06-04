import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { User } from '@/types/user';
import { getUserInfo } from './userAPI';

type UserState = {
  userData: User | undefined;
  userList: User[];
  isAuth: boolean;
  status: 'idle' | 'loading' | 'failed';
};

const initialState: UserState = {
  userData: undefined,
  isAuth: false,
  userList: [],
  status: 'idle',
};

export const fetchUserDataWithThunk = createAsyncThunk(
  //action type string
  'user/fetchUserData',
  //callback function that should return a promise
  async () => {
    const response = await getUserInfo();
    return response;
  }
);

export const userSlice = createSlice({
  //название слайса
  name: 'user',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUserDataWithThunk.pending, (state: UserState) => {
        state.status = 'loading';
      })
      .addCase(
        fetchUserDataWithThunk.fulfilled,
        (state: UserState, action: PayloadAction<User | undefined>) => {
          state.status = 'idle';
          if (action.payload) {
            state.userData = action.payload;
            state.isAuth = true;
          }
        }
      )
      .addCase(fetchUserDataWithThunk.rejected, (state: UserState) => {
        state.status = 'failed';
      });
  },
});

export const {} = userSlice.actions;
//кастомный селект
export const selectUser = (state: RootState) => state.user.userData;
export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectUsers = (state: RootState) => state.user.userList;
export const selectUserReqStatus = (state: RootState) => state.user.status;

//userReducer
export default userSlice.reducer;
