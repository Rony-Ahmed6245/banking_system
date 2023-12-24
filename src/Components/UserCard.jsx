import { Link } from "react-router-dom";


const UserCard = ({ user }) => {


    const { user_name, img, acc_no } = user || {};



    return (
        <div>

            {/* card */}
            <div className="flex gap-4  items-center justify-center">
                <div className="w-full rounded-lg border-2 border-indigo-500 bg-transparent p-4 py-10 text-center shadow-lg dark:bg-gray-800">
                    <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ">
                        <img className="mx-auto mt-4 mb-4 flex h-16 w-16 items-center justify-center rounded-full " src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/408564344_2071604056525501_4400140120533374671_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG1vIsEv9dhNn_fkIUcQQGSINoZno6Mot4g2hmejoyi3oY7WDHcA5SadkibbKkPwuuIqe0H11go5Vfhc_4rn6N_&_nc_ohc=c8Bk2xPkeaoAX_ZUtcw&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfBgDJIDBTtGjpYcnOX2WsI1NSgkeOFeldCFf72iheMrBg&oe=658D8E24" alt="" />
                    </figure>
                    <h2 className="my-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">Name: {user_name}</h2>
                    <h2 className="my-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">Fathers Name: {user_name}</h2>

                    <div className="flex items-center justify-center">
                        <a href="#" className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500">Contact</a>
                        <Link to={`/user/${acc_no}`} className="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">Account</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserCard;