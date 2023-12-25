

const DpFrom = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="card shadow">
                    <span className="card__title uppercase">Deposit</span>

                    <form className="card__form">
                        <input required placeholder="ACC NO" type="text" />
                        <input required placeholder="Deposit Amount" type="number" />
                        <input  placeholder="Penalty Amount" type="text" />
                        <input required type="date" name="" id="" />
                        <button className="sign-up ">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DpFrom;