import { useState } from "react";
import List from "./List";
import Add from "./Add";
import Split from "./Split";

function App() {
    const [friends, setFriends] = useState([]);
    const [selectedFriendId, setSelectedFriendId] = useState(null);
    const [isAddOpen, setIsAddOpen] = useState(false);

    const selectedFriend = friends.find((item) => item.id === selectedFriendId);

    const toggleIsAddOpen = () => {
        setIsAddOpen((isAddOpen) => !isAddOpen);
    };

    const handleAddFriend = (name) => {
        const friend = {
            id: (friends.at(-1)?.id ?? 0) + 1,
            name,
            balance: 0,
        };
        setFriends((friends) => [...friends, friend]);
        setIsAddOpen(false);
    };

    const handleSelectFriend = (id) => {
        setSelectedFriendId(id === selectedFriendId ? null : id);
    };

    const handleSplitBill = (id, expense) => {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === id
                    ? { ...friend, balance: friend.balance + expense }
                    : friend
            )
        );
        setSelectedFriendId(null);
    };

    return (
        <div className="app">
            <div className="panel">
                {friends.length === 0 ? (
                    <div className="no-friends">
                        <span>Your friends list is empty :(</span>
                    </div>
                ) : (
                    <List
                        friends={friends}
                        selectedFriendId={selectedFriendId}
                        onSelectFriend={handleSelectFriend}
                    />
                )}
                {isAddOpen && <Add onAddFriend={handleAddFriend} />}
                <button onClick={toggleIsAddOpen}>
                    {isAddOpen ? "Close" : "Add friend"}
                </button>
            </div>
            {selectedFriendId && (
                <Split
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}

export default App;
