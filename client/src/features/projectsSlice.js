import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getAllProjects = createAsyncThunk("projects", async () => {
    const response = await fetch("https://api.github.com/users");
    const result = response.json();
    return result;
})

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [getAllProjects.pending]: (state) => {
            state.loading = true;
        },
        [getAllProjects.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload
        },
        [getAllProjects.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})


export default projectsSlice.reducer