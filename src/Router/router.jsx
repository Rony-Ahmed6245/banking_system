import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import User from "../Components/User";
import Admin from "../Components/Admin";
import Account from "../Components/Account";
import Dashboard2 from "../Components/Dashboard2";
import AccountFrom from "../Components/AccountFrom";
import DpFrom from "../Components/DpFrom";
import ManageAcc from "../Components/ManageAcc";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/user',
                element:<User></User>,
            },
            {
                path:'/admin',
                element:<Admin></Admin>
            },
            {
                path:"/user/:acc_no",
                element:<Account></Account>,
                loader: ()=> fetch("http://localhost:5000/v1/userAmounts")
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard2></Dashboard2>,
        children:[
            {
                path:'newAccount',
                element:<AccountFrom></AccountFrom>,
            },
            {
                path:'dp',
                element:<DpFrom></DpFrom>,
            },
            {
                path:'manageAcc',
                element:<ManageAcc></ManageAcc>,
            }
        ]
    }
])
export default router;