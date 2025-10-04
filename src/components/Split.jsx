import { useState } from "react";

function Split({ selectedFriend, onSplitBill }) {
    const [billValue, setBillValue] = useState(0);
    const [billBelonging, setBillBelonging] = useState("you");
    const [yourExpense, setYourExpense] = useState(0);

    const friendsExpense = billValue - yourExpense;

    const handleChangeBillValue = (e) => {
        const billValue = +e.target.value;
        if (!isNaN(billValue)) {
            setBillValue(billValue);
            setYourExpense(billValue);
        }
    };

    const handleChangeYourExpense = (e) => {
        const expense = +e.target.value;
        if (!isNaN(expense) && expense <= billValue) {
            setYourExpense(expense);
        }
    };

    const handleSplitBill = (e) => {
        e.preventDefault();

        if (!billValue) {
            return;
        }

        onSplitBill(
            selectedFriend.id,
            billBelonging === "you" ? friendsExpense : -yourExpense
        );
    };

    return (
        <div className="split">
            <span className="title">
                Split a bill with {selectedFriend.name}
            </span>
            <form onSubmit={handleSplitBill}>
                <div>
                    <label htmlFor="billValue">Bill value</label>
                    <input
                        id="billValue"
                        autocomplete="off"
                        type="text"
                        value={billValue}
                        onChange={handleChangeBillValue}
                    ></input>
                </div>
                <div>
                    <label htmlFor="billBelonging">
                        Who is paying the bill?
                    </label>
                    <select
                        id="billBelonging"
                        value={billBelonging}
                        onChange={(e) => setBillBelonging(e.target.value)}
                    >
                        <option value="you">You</option>
                        <option value="friend">{selectedFriend.name}</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="yourExpense">Your expense</label>
                    <input
                        id="yourExpense"
                        autocomplete="off"
                        type="text"
                        value={yourExpense}
                        onChange={handleChangeYourExpense}
                    ></input>
                </div>
                <div>
                    <label htmlFor="friendsExpense">
                        {selectedFriend.name}'s expense
                    </label>
                    <input
                        id="friendsExpense"
                        type="text"
                        value={friendsExpense}
                        disabled
                    ></input>
                </div>
                <button>Split bill</button>
            </form>
        </div>
    );
}

export default Split;
