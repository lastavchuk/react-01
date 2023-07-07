import styled from 'styled-components';

const StyledFriend = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 20px 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 12px 5px rgba(34, 60, 80, 0.2);
    background-color: #ffffff;
    overflow: hidden;

    &.disabled {
        background-color: #d5d5d5;
    }

    .status {
        width: 16px;
        height: 16px;
        margin-right: 15px;
    }
    .online {
        color: #008000;
    }
    .offline {
        color: #e50a0a;
    }
    .avatar {
        -webkit-filter: (5px 5px 2px #555555);
        filter: drop-shadow(5px 5px 2px #555555);
    }
    .name {
        margin-left: 15px;
        font-size: 20px;
        font-weight: 500;
    }
    @media screen and (min-width: 768px) {
        .name {
            font-size: 24px;
        }
    }
`;

export { StyledFriend };
