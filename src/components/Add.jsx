import { useState } from "react";

function Add({ onAddFriend }) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            return;
        }

        onAddFriend(name);
    };

    return (
        <div className="add">
            <form onSubmit={handleSubmit}>
                <label htmlFor="friendsName">Friend's name</label>
                <input
                    id="friendsName"
                    autocomplete="off"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="inner">Add friend</button>
            </form>
        </div>
    );
}

export default Add;
