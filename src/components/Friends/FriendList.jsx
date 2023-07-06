import PropTypes from 'prop-types';
import Friend from './Friend';
import s from './FriendList.module.css'

function FriendList({ friends }) {
    return (
        <section className="section">
            <div className="container">
                <ul className={s.friendList}>
                    <Friend friends={friends} />
                </ul>
            </div>
        </section>
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
