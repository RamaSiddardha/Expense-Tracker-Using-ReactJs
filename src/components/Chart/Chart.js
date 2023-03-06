import "./Chart.css";
import ChartBar from "./ChartBar";

let Chart = (props) => {
    const ValueData = props.dataPoint.map((data) => data.value) 
    const TotalMax = Math.max(...ValueData)
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
     <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={TotalMax}/>
      ))}
    </div>
  );
};

export default Chart;
