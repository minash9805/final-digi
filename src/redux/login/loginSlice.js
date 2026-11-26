import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogin = createAsyncThunk(
    "login/fetchLogin",
    async (userInfo, thunkAPI) => {
        try {
            const response = await axios.get('https://final-digi.onrender.com/users')
            const findUser = response.data.find(item => {
                return item.phone === userInfo.phone && item.password === userInfo.password
            })
            if (!findUser) {
                return thunkAPI.rejectWithValue({
                    type: "notFound",
                    message: "کاربر یافت نشد"
                })
            }
            return {
                user: {
                    firstName: findUser.firstName,
                    lastName: findUser.lastName,
                    phone: findUser.phone,
                    email: findUser.email,
                    role: findUser.role,
                    address: {
                        province: findUser.address.province,
                        city: findUser.address.city,
                        street: findUser.address.street,
                        postalCode: findUser.address.postalCode,
                        details: findUser.address.details
                    }
                },
                token: "token"

            }
        } catch (error) {
            return thunkAPI.rejectWithValue({
                type: "server",
                message: error.message
            })
        }
    }
)
const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || null,
        isAuth: Boolean(JSON.parse(localStorage.getItem("user")) && localStorage.getItem("token")),
        loading: false,
        error: null
    },
    reducers: {
        resetLogin:(state)=>{
            state.error=null
        },
        logOut:(state)=>{
            state.user=null
            state.token=null
            state.isAuth=false
            state.error=null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.pending, (state) => {
            state.loading = true
            state.error = null
        }).addCase(fetchLogin.fulfilled,(state, action)=>{
            state.user=action.payload.user
            state.token=action.payload.token
            state.isAuth=true
            state.loading=false
        }).addCase(fetchLogin.rejected,(state, action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})
export const {resetLogin,logOut}=loginSlice.actions
export const loginReducer=loginSlice.reducer