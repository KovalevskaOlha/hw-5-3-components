export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) => {
    return (
        <div className="profile">
            <img className="profile__img" src={avatar} alt={username} />
            <h3 className="profile__username">{username}</h3>
            <p className="profile__tag">@{tag}</p>
            <p className="profile__location">{location}</p>
            <ul className="profile__list">
                <li className="profile__item">
                    <p className="profile__text">Followers</p>
                    <p className="profile__num">{followers}</p>
                </li>
                 <li className="profile__item">
                    <p className="profile__text">Views</p>
                    <p className="profile__num">{views}</p>
                </li>
                 <li className="profile__item">
                    <p className="profile__text">Likes</p>
                    <p className="profile__num">{likes}</p>
                </li>
            </ul>
        </div>
    )
};