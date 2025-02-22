import css from './StatisticsItem.module.css';

const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <>
      <Icon />
      <span className={css.counter}>{total}</span>
      <p className={css.text}>{title}</p>
    </>
  );
};
export default StatisticsItem;
