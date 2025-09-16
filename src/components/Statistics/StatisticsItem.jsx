export const StatisticsItem = ({ statistic: { id, label, percentage } }) => {
  return (
    <li className="statistics__item" key={id}>
      <p className="statistics__label">{label}</p>
      <p className="statistics__num">{percentage}%</p>
    </li>
  );
};
