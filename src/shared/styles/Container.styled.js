import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 375px;
    min-width: 320px;

    margin-right: auto;
    margin-left: auto;

    padding-left: 10px;
    padding-right: 10px;

    @media screen and (min-width: 768px) {
        max-width: 768px;
        width: 450px;
    }
`;

export { StyledContainer };
