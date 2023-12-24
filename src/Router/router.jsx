import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import User from "../Components/User";
import Admin from "../Components/Admin";
import Account from "../Components/Account";


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
    }
])
export default router;