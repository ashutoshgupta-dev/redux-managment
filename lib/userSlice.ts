import { createSlice,PayloadAction} from "@reduxjs/toolkit"; 

type userType={
    name:string;
    email:string
}

type userState={
    country:string;
    users:userType[]
}
const initialState:userState={
    country:"india",
    users:[{name:"ashutosh",email:"ashu@gmail.com"}]
}

const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action:PayloadAction<userType>)=>{
            state.users.push(action.payload);
        },
        delUser:(state,action)=>{
             state.users.splice(action.payload,1)
        },
        updateUser:(state,action:PayloadAction<{index:number,formData:userType}>)=>{
            state.users[action.payload.index]=action.payload.formData
        }
    }
})  

export const{addUser,delUser,updateUser}=usersSlice.actions;
export default usersSlice.reducer;