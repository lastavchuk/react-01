import { StyledContainer } from 'components/Container/Container.styled';
import { StyledSection } from 'components/Section/Section.styled';
import PropTypes from 'prop-types';
import Friend from './Friend';

function FriendList({ friends }) {
    return (
        <StyledSection>
            <StyledContainer>
                <ul>
                    <Friend friends={friends} />
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
