import styled from 'styled-components';

const StyledTransactionHistory = styled.table`
    table-layout: fixed;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    border-collapse: collapse;
    box-shadow: 0px 0px 12px 5px rgba(34, 60, 80, 0.2);
    font-size: 16px;
    background-color: #ffffff;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        .transactionHistory {
            font-size: 20px;
        }
    }

    tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
    }
    & th {
        background-color: #454545;
        border: 1px solid #212529;
        color: #ffffff;
    }
    & td,
    & th {
        padding: 15px 20px;
    }
    & td:not(:last-child),
    & th:not(:last-child) {
        border-right: 1px solid #212121;
    }

    & td:first-child {
        text-align: left;
    }
`;

export { StyledTransactionHistory };
