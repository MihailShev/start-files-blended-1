import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import css from './Statistics.module.css';

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};

const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <h3 className={css.title}> {title}</h3>}

      <ul className={css.list}>
        {stats.map(({ id, ...stats }) => {
          return (
            <li key={id} className={css.item}>
              <StatisticsItem
                icon={icons[id]}
                title={stats.title}
                total={stats.total}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
