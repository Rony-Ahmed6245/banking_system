import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const User = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [searchedUser, setSearchedUser] = useState(null);

    useEffect(() => {
        fetch("/public/user.json")
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
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="rounded-lg bg-gray-200 p-5">
                <div className="flex">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                        placeholder=""
                    />
                    <input
                        type="button"
                        value="Search"
                        onClick={handleSearch}
                        className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                    />
                    <input
                        type="button"
                        value="Reset"
                        onClick={resetSearch}
                        className="bg-red-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-red-800 transition-colors ml-2"
                    />
                </div>
            </div>

            <div className="mt-10">
                {searchedUser ? (
                    <UserCard key={searchedUser.id} user={searchedUser}></UserCard>
                ) : (
                    <p className="text-center mt-20">No results found.</p>
                )}
            </div>
        </div>
    );
};

export default User;
