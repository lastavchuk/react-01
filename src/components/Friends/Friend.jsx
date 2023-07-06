import PropTypes from 'prop-types';
import s from './FriendList.module.css';
const svgOnline = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-label="online" viewBox="0 0 16 16" fill="currentColor" version="1.1" role="img"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L6.75 9.19 5.28 7.72a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z"></path></svg>
const svgOffline = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-label="offline" viewBox="0 0 16 16" fill="currentColor" version="1.1" role="img"><path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path></svg>

function Friend({ friends }) {
    return friends.map(friend => {
        return (
            <li className={`${s.item} ${!friend.isOnline && s.disabled}`} key={friend.id}>
                <span className={`${s.status} ${friend.isOnline ? s.online : s.offline}`}>{friend.isOnline ? svgOnline : svgOffline}</span>
                <img
                    className={s.avatar}
                    src={friend.avatar}
                    alt={friend.name + ' avatar'}
                    width="48"
                />
                <p className={s.name}>{friend.name}</p>
            </li>
        );
    });
}

Friend.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Friend;
