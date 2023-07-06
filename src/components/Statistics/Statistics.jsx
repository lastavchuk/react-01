import s from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = props => {
    const { title, stats } = props;
    return (
        <section className="section">
            <div className="container">
                <div className={s.statistics}>
                    {title && <h2 className={s.title}>{title}</h2>}

                    <ul className={s.statList}>
                        {stats.map(el => {
                            return (
                                <li style={{backgroundColor: getRandomHexColor()} } className={s.item} key={el.id}>
                                    <span className={s.label}>{el.label}</span>
                                    <span className={s.percentage}>
                                        {el.percentage}%
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

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
