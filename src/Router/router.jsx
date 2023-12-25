import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import User from "../Components/User";
import Admin from "../Components/Admin";
import Account from "../Components/Account";
import Dashboard2 from "../Components/Dashboard2";
import AccountFrom from "../Components/AccountFrom";
import DpFrom from "../Components/DpFrom";


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
                loader: ()=> fetch("/public/amount.json")
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
            }
        ]
    }
])
export default router;