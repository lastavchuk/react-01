import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandom';
import { StyledStatisticItem } from './StatisticItem.styled';

const StatisticItem = ({ item }) => {
    return (
        <StyledStatisticItem $bgColor={getRandomHexColor()} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
        </StyledStatisticItem>
    );
};

StatisticItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
};

export default StatisticItem;
