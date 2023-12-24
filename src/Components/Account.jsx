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
        <div className="max-w-7xl mx-auto p-4 mt-10">



            <div className="md:flex justify-start items-start gap-4">
                <div className="md:w-4/12 flex-col gap-4 md:flex justify-center md:mt-10 ">
                    <p>Account Number: {acc_no}</p>
                    <p>Total Amount: {totalAmount}.00TK</p>
                    <p>Penalty Amount: {penaltyAmount}.00TK</p>
                </div>
                <div className="md:w-8/12 mt-20 md:mt-0">
                    <h1 className="text-center">History</h1>
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Deposit Amount</th>
                                    <th>Penalty Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    filterAcc?.map(item => (
                                        <Table key={item._id} item={item} ></Table>
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
