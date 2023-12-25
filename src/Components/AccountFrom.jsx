

const AccountFrom = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="card shadow">
                    <span className="card__title uppercase">Create Account</span>

                    <form className="card__form">
                        <input required placeholder="Acc holder name" type="text" />
                        <input required placeholder="Acc number" type="number" />
                        <input required placeholder="Image" type="text" />
                        <button className="sign-up">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountFrom;