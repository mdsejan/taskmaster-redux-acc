import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: "taskSliece",
    initialState,
    reducers: {},
})

export default taskSlice.reducer;