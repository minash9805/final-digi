import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRegister = createAsyncThunk(
    "register/fetchRegister",
    async (newUser, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3000/users')
            const findUser = response.data.find(item => {
                return item.phone === newUser.phone
            })
            if (findUser) {
                return thunkAPI.rejectWithValue({
                    type: "duplicate",
                    message: "شما قبلا در سایت ثبت نام کرده اید"
                })
            }
            const res = await axios.post('http://localhost:3000/users', {
                firstName: newUser.firstName,
                lastName:newUser.lastName,
                phone: newUser.phone,
                email: newUser.email,
                password: newUser.password,
                role: newUser.role,
                address: {
                    province: newUser.province,
                    city: newUser.city,
                    street: newUser.street,
                    postalCode: newUser.postalCode,
                    details: newUser.details
                }
            })
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue({
                type: "server",
                message: error.message
            })
        }
    }
)
const registerSlice = createSlice({
    name: "register",
    initialState: {
        user: null,
        status: null,
        loading: false,
        error: null
    },
    reducers: {
        resetRegister:(state)=>{
            state.status=null
            state.error=null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.pending, (state) => {
            state.loading = true
            state.error = null
            state.status = "loading"
        }).addCase(fetchRegister.fulfilled, (state, action) => {
            state.user = action.payload
            state.status = "succeeded"
            state.loading = false
        }).addCase(fetchRegister.rejected,(state, action)=>{
            state.status="failed"
            state.loading=false
            state.error=action.payload
        })
    }
})
export const {resetRegister}=registerSlice.actions
export const registerReducer=registerSlice.reducer