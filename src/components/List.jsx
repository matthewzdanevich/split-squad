import Item from "./Item";

function List({ friends, selectedFriendId, onSelectFriend }) {
    return (
        <div className="list">
            {friends.map((friend) => (
                <Item
                    friend={friend}
                    selectedFriendId={selectedFriendId}
                    onSelectFriend={onSelectFriend}
                    key={friend.id}
                />
            ))}
        </div>
    );
}

export default List;
