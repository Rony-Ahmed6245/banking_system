

const Dashboard = () => {
    return (
        <div>
            <div className="-mt-20 flex justify-center items-center">
                <div role="tablist" className="tabs shadow bg-gray-100 rounded  tabs-lifted md:tabs-lg tabs-sm">
                    <input type="radio" name="my_tabs_1" id="tab1" role="tab" className="tab" aria-label="New Acc" />
                    <label htmlFor="tab1" role="tabpanel" className="tab-content p-10">
                        <div className="flex justify-center items-center">
                            <div className="card shadow">
                                <span className="card__title">Create Account</span>
                               
                                <div className="card__form">
                                    <input required placeholder="Acc holder name" type="text"/>
                                    <input required placeholder="Acc number" type="number"/>
                                    <input required placeholder="Image" type="text"/>
                                        <button className="sign-up"> Sign up</button>
                                </div>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="my_tabs_1" id="tab2" role="tab" className="tab" aria-label="All Acc" checked />
                    <label htmlFor="tab2" role="tabpanel" className="tab-content p-10">
                        Tab content 2
                    </label>

                    <input type="radio" name="my_tabs_1" id="tab3" role="tab" className="tab" aria-label="DP" />
                    <label htmlFor="tab3" role="tabpanel" className="tab-content p-10">
                        Tab content 3
                    </label>

                    <input type="radio" name="my_tabs_1" id="tab4" role="tab" className="tab" aria-label="History" />
                    <label htmlFor="tab4" role="tabpanel" className="tab-content p-10">
                        Tab content 4
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
