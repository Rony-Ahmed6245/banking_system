import { useState } from "react";
import Swal from "sweetalert2";


const AccountForm = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleUserData = async (e) => {
        e.preventDefault();

        const user_name = e.target.userName.value;
        const acc_no = e.target.acc_no.value;
        const img = e.target.img.value;

        const userFormData = { user_name, acc_no, img };
        console.log(userFormData);

        try {
            // Assuming your server is running on http://localhost:5173
            const response = await fetch('http://localhost:5000/v1/userBankAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userFormData),
            });

            if (response.ok) {
                Swal.fire("New Bank Account Created Successfully!");
                // Optionally, you can reset the form or navigate to another page
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Error creating account');
            }
        } catch (error) {
            console.error('Error creating account:', error);
            setErrorMessage('Something went wrong. Please try again.');
        }
        e.target.reset()
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="card shadow">
                    <span className="card__title uppercase">Create Account</span>

                    <form onSubmit={handleUserData} className="card__form">
                        <input type="text" name="userName" required placeholder="User Name" />
                        <input name="acc_no" pattern="[0-9]{8,}" required placeholder="Account Number" type="text" />
                        <input name="img" required placeholder="Image" type="text" />
                        <button type="submit" className="sign-up">
                            Create
                        </button>
                    </form>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default AccountForm;
