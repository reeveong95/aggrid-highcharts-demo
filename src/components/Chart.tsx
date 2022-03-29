import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

const options: Highcharts.Options = {
  title: {
    text: "Bar Chart",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          y: 9,
          name: "Point1",
          color: "#00FF00",
        },
        {
          y: 6,
          name: "Point2",
          color: "#FF00FF",
        },
        {
          y: 12,
          name: "Point3",
          color: "#FF0000",
        },
      ],
    },
  ],
};

const BarChart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};

export default BarChart;
