import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { FiSearch } from "react-icons/fi";
import Loading from "./Loading";



const User = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [searchedUser, setSearchedUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/v1/userBankAccounts")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const handleSearch = () => {
        const foundUser = users.find(
            (user) => user.acc_no.toString() === searchTerm
        );
        setSearchedUser(foundUser);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setSearchedUser(null); // Reset searchedUser when input changes
    };

    const resetSearch = () => {
        setSearchTerm("");
        setSearchedUser(null);
    };

    if (loading) {
        return <div className="flex justify-center items-center h-[500px] "> <p className="loader"></p> </div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <marquee  direction="" className='uppercase text-sm text-[#EF4040] font-semibold'>Do not share account number with other</marquee>
            <div className="rounded-lg bg-gray-200 p-5">
                <div className="flex justify-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="w-full max-w-[280px] bg-white pl-2  rounded-l-lg text-base font-semibold outline-0"
                        placeholder="Type Acc No"
                    />
                    <button onClick={handleSearch}
                        className=" bg-[#711DB0]  outline-none border-none px-4 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[#C21292] transition-colors"><FiSearch /></button>
                   
                    <input
                        type="button"
                        value="Reset"
                        onClick={resetSearch}
                        className="hover:bg-[#EF4040] outline-none border-none px-4 p-2 rounded-lg rounded-br-lg text-white font-semibold bg-[#FFA732] transition-colors ml-2"
                    />
                </div>
            </div>

            <div className="mt-5">
                {searchedUser ? (
                    <UserCard key={searchedUser._id} user={searchedUser}></UserCard>
                ) : (
                    <p className="text-center mt-10 flex justify-center items-center md:text-xl text-md gap-1"><Loading></Loading></p>
                )}
            </div>
        </div>
    );
};

export default User;
