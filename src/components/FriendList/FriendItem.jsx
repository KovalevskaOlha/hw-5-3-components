export const FriendsItem = ({friend: {avatar, name,isOnline, id}}) => {
    return (
        <li className="friends__item" id={id}>
            <span className={isOnline ? "status online" : "status offline"}></span>
            <img src={avatar} alt={name} />
            <p className="friends__name">{name}</p>            
        </li>
    );
};