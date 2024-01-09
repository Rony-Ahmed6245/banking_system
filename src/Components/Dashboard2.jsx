import { Link, Outlet } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineHistory } from "react-icons/ai";
import { TiMail } from "react-icons/ti";








const Dashboard2 = () => {
    return (
        <div>  
            <div className="grid grid-cols-2 md:grid-cols-6 max-w-5xl mx-auto gap-2 mt-4 mb-10">
                <Link className="bg-[#EF4040] text-white py-1 md:px-4 px-2 rounded mx-1 font-semibold text-start md:text-center text-sm md:text-md hover:bg-[#711DB0] transition-all uppercase flex justify-start md:justify-center items-center gap-1" to={'/admin'}><CiLogout />Log out</Link>
                <Link className="bg-[#C21292] text-white py-1 md:px-4 px-2 rounded mx-1 font-semibold text-start md:text-center text-sm md:text-md hover:bg-[#711DB0] transition-all uppercase flex justify-start md:justify-center items-center gap-1" to={'/dashboard/newAccount'}><MdAccountCircle />New Account</Link>
                <Link className="bg-[#C21292] text-white py-1 md:px-4 px-2 rounded mx-1 font-semibold text-start md:text-center text-sm md:text-md hover:bg-[#711DB0] transition-all uppercase flex justify-start md:justify-center items-center gap-1" to={'/dashboard/manageAcc'}><MdManageAccounts />M.Account</Link>
                <Link className="bg-[#C21292] text-white py-1 md:px-4 px-2 rounded mx-1 font-semibold text-start md:text-center text-sm md:text-md hover:bg-[#711DB0] transition-all uppercase flex justify-start md:justify-center items-center gap-1" to={'/dashboard/dp'}><IoIosAddCircleOutline />Deposit</Link>
                <Link className="bg-[#C21292] text-white py-1 md:px-4 px-2 rounded mx-1 font-semibold text-start md:text-center text-sm md:text-md hover:bg-[#711DB0] transition-all uppercase flex justify-start md:justify-center items-center gap-1" to={'/dashboard/dp'}><AiOutlineHistory />Dp history</Link>
                <Link className="bg-[#C21292] text-white py-1 md:px-4 px-2 rounded mx-1 font-semibold text-start md:text-center text-sm md:text-md hover:bg-[#711DB0] transition-all uppercase flex justify-start md:justify-center items-center gap-1" to={'/dashboard/dp'}><TiMail />messages</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard2;