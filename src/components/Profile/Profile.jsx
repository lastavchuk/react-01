import style from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers = 0, views = 0, likes = 0 },
}) => {
    return (
        <section className="section">
            <div className="container">
                <div className={style.profile}>
                    <div className={style.description}>
                        <img
                            src={avatar}
                            alt={username}
                            className={style.avatar}
                        />
                        <p className={style.name}>{username}</p>
                        <p className={style.tag}>@{tag}</p>
                        <p className={style.location}>{location}</p>
                    </div>

                    <ul className={style.stats}>
                        <li className={style.listItem}>
                            <span className={style.label}>Followers</span>
                            <span className={style.quantity}>{followers}</span>
                        </li>
                        <li className={style.listItem}>
                            <span className={style.label}>Views</span>
                            <span className={style.quantity}>{views}</span>
                        </li>
                        <li className={style.listItem}>
                            <span className={style.label}>Likes</span>
                            <span className={style.quantity}>{likes}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

Profile.prototype = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
};

export default Profile;
