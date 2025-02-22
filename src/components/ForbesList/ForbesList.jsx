import css from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem';

const ForbesList = ({ list }) => {
  return (
    <div className={css.board}>
      <div className={css.header}>
        <h2 className={css.title}>
          <span className={css.titleTop}>Forbes</span>
          <span className={css.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={css.list}>
        {list.map(({ avatar, name, capital, isIncrease, id }) => {
          return (
            <li key={id} className={css.item}>
              <ForbesListItem
                avatar={avatar}
                name={name}
                capital={capital}
                isIncrease={isIncrease}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForbesList;
