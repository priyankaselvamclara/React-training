import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:[], error:''
}

export const counterSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
        console.log("&&&&&&&&&&& fetchDataSuccess",state, action.payload);
        state.data = action.payload;
    
    },
   fetchDataFailure: (state, action) => {
     console.log("&&&&&&&&&&& fetchDataFailure",action)
     state.data = action.payload;
    },
    deleteData:(state, action) => {
        console.log('state #########################333',state, action)
        state.data = action.payload;
    },
    editData: (state, action) => {
        console.log('state #########################333',state, action)
        state.data = action.payload;
    }
  }
})


// Action creators are generated for each case reducer function
export const { fetchDataSuccess, fetchDataFailure, deleteData, editData } = counterSlice.actions

export default counterSlice.reducer;