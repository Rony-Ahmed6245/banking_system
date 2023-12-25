import { useLoaderData, useParams } from "react-router-dom";
import Table from "./Table";

const Account = () => {
    const data = useLoaderData();
    console.log(data);
    const { acc_no } = useParams();
    console.log(acc_no);

    const filterAcc = data.filter((item) => item.acc_no == acc_no);
    console.log(filterAcc);

    const totalAmount = filterAcc.reduce((sum, item) => sum + item.amount, 0);
    // console.log(addition);

    const penaltyAmount = filterAcc.reduce((sum, item) => sum + item.pen_amount, 0);
    // console.log(addition);

    return (
        <div className="max-w-7xl mx-auto p-4 my-5">
            <div className="md:flex justify-start items-start gap-4">
                <div className="md:w-4/12    flex-col rounded gap-4 mb-5 md:mb-0 md:flex justify-center  ">
                    <p className="text-md bg-[#C21292] uppercase text-white  font-bold  p-5 shadow  rounded">Account Number: {acc_no}</p>
                    <p className="text-md bg-[#FFA732] uppercase text-white my-2 font-bold p-5 shadow rounded">Total Amount: {totalAmount}.00TK</p>
                    <p className="text-md  bg-[#EF4040] uppercase text-white  font-bold p-5  shadow rounded">Penalty Amount: {penaltyAmount}.00TK</p>
                </div>
                <div className="md:w-8/12  text-white rounded-md">
                    <h1 className="text-center py-5 bg-[#711DB0] rounded-t-md uppercase text-white">Deposit History</h1>
                    <div className="overflow-x-auto ">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#711DB0]">
                                    <th className="text-white text-center shadow border">NO</th>
                                    <th className="text-white text-center shadow border">Deposit Amount</th>
                                    <th className="text-white text-center shadow border">Penalty Amount</th>
                                    <th className="text-white text-center shadow border">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    filterAcc?.map((item, index )=> (
                                        <Table key={item._id} item={item} index={index+1} ></Table>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
