import PropTypes from 'prop-types';
import { StyledStatistics } from './Statistics.styled';
import StatisticItem from './StatisticItem';
import { StyledSection } from 'shared/styles/Section.styled';
import { StyledContainer } from 'shared/styles/Container.styled';

const Statistics = props => {
    const { title, stats } = props;
    return (
        <StyledSection>
            <StyledContainer>
                <StyledStatistics>
                    {title && <h2 className="title">{title}</h2>}

                    <ul className="statList">
                        {stats.map(el => {
                            return <StatisticItem item={el} key={el.id} />;
                        })}
                    </ul>
                </StyledStatistics>
            </StyledContainer>
        </StyledSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

export default Statistics;
