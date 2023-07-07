import styled from 'styled-components';

export const StyledProfile = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 12px 5px rgba(34, 60, 80, 0.2);
    background-color: #ffffff;
    overflow: hidden;

    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding-top: 40px;

        .avatar {
            width: 150px;
            border-radius: 75px;
            background-color: #808080;
        }

        .name {
            margin-top: 20px;
            margin-bottom: 15px;

            font-size: 28px;
            font-weight: 700;
            text-align: center;
            color: #000000;
        }
        .tag,
        .location {
            margin-bottom: 15px;

            font-size: 18px;
            font-weight: 700;
            text-align: center;
            color: #999999;
        }
        .location {
            margin-bottom: 30px;
        }
        @media screen and (min-width: 768px) {
            .name {
                font-size: 36px;
            }
            .tag,
            .location {
                font-size: 22px;
            }
            .label {
                font-size: 18px;
            }
            .quantity {
                font-size: 26px;
            }
        }
    }
    .stats {
        display: flex;
        justify-content: space-around;
    }
    .listItem {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        padding: 20px 0;

        background-color: #f3f6f9;
        border-top: 1px solid #e4e9f0;
    }
    .listItem:not(:last-child) {
        border-right: 1px solid #e4e9f0;
    }
    @media screen and (min-width: 768px) {
        .listItem {
            padding: 24px 0;
        }
    }
    .label {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 700;
        color: #999999;
    }

    .quantity {
        font-size: 22px;
        font-weight: 700;
        color: #000000;
    }
`;
