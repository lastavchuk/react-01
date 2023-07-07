import styled from 'styled-components';

const StyledStatisticItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 20px 0;

    border-top: 1px solid #e4e9f0;
    background-color: ${props => props.$bgColor};

    &:not(:last-child) {
        border-right: 1px solid #e4e9f0;
    }
    .label {
        font-size: 12px;
    }
    .percentage {
        font-size: 22px;
        font-weight: 700;
        color: #000000;
    }
    @media screen and (min-width: 768px) {
        .label {
            font-size: 16px;
        }
        .percentage {
            font-size: 26px;
        }
    }
`;

export { StyledStatisticItem };
