import PropTypes from 'prop-types';
import { svgOffline, svgOnline } from 'utils/svgIcons';
import { StyledFriend } from './Friend.styled';

function Friend({ friends }) {
    return friends.map(friend => {
        return (
            <StyledFriend
                className={`${!friend.isOnline && 'disabled'}`}
                key={friend.id}
            >
                <span
                    className={`status ${
                        friend.isOnline ? 'online' : 'offline'
                    }`}
                >
                    {friend.isOnline ? svgOnline : svgOffline}
                </span>
                <img
                    className="avatar"
                    src={friend.avatar}
                    alt={friend.name + ' avatar'}
                    width="48"
                />
                <p className="name">{friend.name}</p>
            </StyledFriend>
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
