import { StatisticsItem } from "./StatisticsItem";
import statistics from "../../data/statistics.json";

export const StatisticsList = ({label,percentage}) => {
    return (
        <ul className="statistics__list">
           {statistics.map((statistic) => {
            return <StatisticsItem statistic={statistic} />
           })}
        </ul>
    )
}