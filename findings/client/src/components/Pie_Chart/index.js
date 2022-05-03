// import { PieChart } from 'react-minimal-pie-chart';
// import { AgChartsReact } from "ag-charts-react";
import Chart from 'react-google-charts'
function Pie_Chart() {

    const pieData = [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
      ]
      const pieOptions = {
        title: 'My Daily Activities',
        pieHole: 0.4,
      }


  return (
    <div>

<Chart
          width={'600px'}
          height={'320px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />        

</div>
);
}

export default Pie_Chart;