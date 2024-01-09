import Swal from "sweetalert2";


const DpFrom = () => {


    const handleDepositData = async (e) => {
        e.preventDefault();

        const acc_no = e.target.acc_no.value; 
        const amount = e.target.amount.value; 
        const pen_amount = e.target.pen_amount.value; 
        const date  = e.target.date.value; 
        
        const depositFormData = { acc_no, amount, pen_amount,date }
        console.log(depositFormData)

        try {
            // Assuming your server is running on http://localhost:5173
            const response = await fetch('http://localhost:5000/v1/userAmounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(depositFormData),
            });

            if (response.ok) {
                Swal.fire("Amount Added Successfully!");
                // Optionally, you can reset the form or navigate to another page
            }
        } catch (error) {
            console.error('Error creating account:', error);
           
        }
        e.target.reset()
    };
    


    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="card shadow">
                    <span className="card__title uppercase">Deposit</span>
                    <form onSubmit={handleDepositData} className="card__form">
                        <input name="acc_no" pattern="[0-9]{8,}" required placeholder="Account Number" type="text" />
                        <input name="amount" required placeholder="Deposit Amount" type="number" />
                        <input name="pen_amount"  placeholder="Penalty Amount" type="text" />
                        <input name="date" required type="date"  id="" />
                        <button className="sign-up ">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DpFrom;