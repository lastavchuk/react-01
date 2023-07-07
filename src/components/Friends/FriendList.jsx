import PropTypes from 'prop-types';
import { StyledContainer } from 'shared/styles/Container.styled';
import { StyledSection } from 'shared/styles/Section.styled';
import Friend from './Friend';

function FriendList({ friends }) {
    return (
        <StyledSection>
            <StyledContainer>
                <ul>
                    {friends.map(friend => (
                        <Friend friend={friend} key={friend.id} />
                    ))}
                </ul>
            </StyledContainer>
        </StyledSection>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FriendList;
