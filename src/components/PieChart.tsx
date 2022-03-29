import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

const options: Highcharts.Options = {
  title: {
    text: "Pie chart",
  },
  series: [
    {
      type: "pie",
      data: [
        {
          y: 1,
          name: "Point2",
          color: "#00FF00",
        },
        {
          y: 7,
          name: "Point1",
          color: "#FF00FF",
        },
        {
          y: 10,
          name: "Point3",
          color: "orangered",
        },
      ],
    },
  ],
};

const PieChart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    ></HighchartsReact>
  );
};
export default PieChart;
