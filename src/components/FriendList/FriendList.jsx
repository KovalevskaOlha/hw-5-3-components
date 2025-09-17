import { FriendsItem } from "./FriendItem";
import friends from "../../data/friends.json";

export const FriendsList = ({avatar,name,isOnline, id}) => {
    return (
        <ul className="friends__list">
            {friends.map((friend => {
                return <FriendsItem friend={friend} />
            }))}
        </ul>
    )
}