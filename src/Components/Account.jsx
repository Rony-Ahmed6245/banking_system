import { useLoaderData, useParams } from "react-router-dom";

const Account = () => {
    const data = useLoaderData();
    console.log(data);
    const { acc_no } = useParams();
    console.log(acc_no);

    const filterAcc = data.filter((item) => item.acc_no == acc_no);
    console.log(filterAcc);

    const addition = filterAcc.reduce((sum, item) => sum + item.amount, 0);
    console.log(addition);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <p>User account: {acc_no}</p>
            <p>Total Amount: {addition}</p>
        </div>
    );
};

export default Account;
