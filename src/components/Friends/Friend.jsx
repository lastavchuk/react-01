import PropTypes from 'prop-types';
import { svgOffline, svgOnline } from 'utils/svgIcons';
import { StyledFriend } from './Friend.styled';

function Friend({ friend }) {
    return (
        <StyledFriend className={`${!friend.isOnline && 'disabled'}`}>
            <span
                className={`status ${friend.isOnline ? 'online' : 'offline'}`}
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
}

Friend.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Friend;
