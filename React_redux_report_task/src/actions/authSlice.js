import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for registration
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
      try {
        const response = await fetch('https://your-dotnet-api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
  
        let data = await response.json();
        console.log('response', data);
  
        if (response.status === 200) {
          localStorage.setItem('token', data.token);
          return { ...data, username: user.username };
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  // Async thunk for login
export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
      try {
        const response = await fetch('https://your-dotnet-api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
  
        let data = await response.json();
  
        if (response.status === 200) {
          localStorage.setItem('token', data.token);
          return { ...data, username: user.username };
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  // Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, username: null, isAuthenticated: false, isLoading: false, error: null },
    reducers: {
      logout: (state) => {
        state.isAuthenticated = false;
        state.token = null;
        localStorage.removeItem('token');
      },
    },
    extraReducers: {
      // Register
      [register.fulfilled]: (state, { payload }) => {
        state.isAuthenticated = true;
        state.token = payload.token;
        state.username = payload.username;
        state.isLoading = false;
        state.error = null;
      },
      [register.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      },
      [register.pending]: (state) => {
        state.isLoading = true;
      },
  
      // Login
      [login.fulfilled]: (state, { payload }) => {
        state.isAuthenticated = true;
        state.token = payload.token;
        state.username = payload.username;
        state.isLoading = false;
        state.error = null;
      },
      [login.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      },
      [login.pending]: (state) => {
        state.isLoading = true;
      },
    },
  });

  // Exports
export const { logout } = authSlice.actions;
export default authSlice.reducer;