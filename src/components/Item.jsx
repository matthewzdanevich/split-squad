function Item({ friend, selectedFriendId, onSelectFriend }) {
    const isSelected = friend.id === selectedFriendId;

    return (
        <div className={`item ${isSelected && "selected"}`}>
            <div className="info">
                <span className="name">{friend.name}</span>
                {friend.balance === 0 && (
                    <span className="balance-equal">
                        {`You and ${friend.name} are even`}
                    </span>
                )}
                {friend.balance > 0 && (
                    <span className="balance-plus">
                        {`${friend.name} owes you €${friend.balance}`}
                    </span>
                )}
                {friend.balance < 0 && (
                    <span className="balance-minus">
                        {`You owe ${friend.name} €${Math.abs(friend.balance)}`}
                    </span>
                )}
            </div>
            <button className="inner" onClick={() => onSelectFriend(friend.id)}>
                {isSelected ? "Close" : "Select"}
            </button>
        </div>
    );
}

export default Item;
