import css from './ForbesListItem.module.css';
import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';

const ForbesListItem = ({ avatar, name, capital, isIncrease }) => {
  return (
    <>
      <img className={css.avatar} src={avatar} alt={name} />
      <h3 className={css.title}>{name}</h3>
      <span className={css.capital}>
        {capital} <BiDollarCircle color="#2196f3" size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </>
  );
};

export default ForbesListItem;
