import styled from 'styled-components';

const StyledStatistics = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 12px 5px rgba(34, 60, 80, 0.2);
    background-color: #ffffff;
    overflow: hidden;

    .title {
        padding: 20px 0;
        font-size: 20px;
        text-align: center;
    }
    @media screen and (min-width: 768px) {
        .title {
            padding: 24px 0;
            font-size: 24px;
        }
    }

    .statList {
        display: flex;
    }
`;

export { StyledStatistics };
