import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios')

let base_url = 'http://localhost:5000'
export const fetchOrders = createAsyncThunk('ui/fetchOrders', async () => {
    console.log('sending to test')

    
    return await axios.get(base_url + '/test').then(res => res.data
    )
        
})

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        orders: [0],
        selectedOrder: {first_name:null},
        notes: [],
        status: null
    },
    reducers: {
        //select order
        selectOrder: (state, action) => {
            console.log(action)
            state.selectedOrder = {first_name:'yeet',last_name:'onyofeet'}
        }
    },
    extraReducers: {
        //fetch orders
        [fetchOrders.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchOrders.fulfilled]: (state, action) => {
            state.orders = action.payload
            state.status = 'success'
        },
        [fetchOrders.pending]: (state, action) => {
            state.status = 'failed'
        }
        //fetch notes
        
        
    }
})

export const { selectOrder } = uiSlice.actions;

export default uiSlice.reducer