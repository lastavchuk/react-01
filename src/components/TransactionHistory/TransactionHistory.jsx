import PropTypes from 'prop-types';
import { StyledContainer } from 'components/Container/Container.styled';
import { StyledSection } from 'components/Section/Section.styled';
import { StyledTransactionHistory } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledTransactionHistory>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Currency</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.type}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.currency}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </StyledTransactionHistory>
            </StyledContainer>
        </StyledSection>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory;
