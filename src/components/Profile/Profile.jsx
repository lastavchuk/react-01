import PropTypes from 'prop-types';
import { StyledContainer } from 'shared/styles/Container.styled';
import { StyledSection } from 'shared/styles/Section.styled';
import { StyledProfile } from './Profile.styled';

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers = 0, views = 0, likes = 0 },
}) => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledProfile>
                    <div className="description">
                        <img src={avatar} alt={username} className="avatar" />
                        <p className="name">{username}</p>
                        <p className="tag">@{tag}</p>
                        <p className="location">{location}</p>
                    </div>

                    <ul className="stats">
                        <li className="listItem">
                            <span className="label">Followers</span>
                            <span className="quantity">{followers}</span>
                        </li>
                        <li className="listItem">
                            <span className="label">Views</span>
                            <span className="quantity">{views}</span>
                        </li>
                        <li className="listItem">
                            <span className="label">Likes</span>
                            <span className="quantity">{likes}</span>
                        </li>
                    </ul>
                </StyledProfile>
            </StyledContainer>
        </StyledSection>
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
