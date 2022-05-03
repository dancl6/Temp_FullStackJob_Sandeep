import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from 'react-google-charts'
function Pie_Chart() {

    const [dataResponse, setDataResponse ] = useState()
    useEffect(() => {
        axios.get('/grouped_findings').then(response=> {
          console.log("grouped findings response from axios is:", response)

          setDataResponse(response)
        })

    }, []);

var critical, high, medium, low 
critical = 0
high = 0
medium = 0
low = 0
if (dataResponse) {
    for ( let i = 0; i < dataResponse.data.data.length; i ++ ) {
        if (dataResponse.data.data[i].severity === "critical" ){
            critical = critical + 1
        }
        if (dataResponse.data.data[i].severity === "high" ){
            high = high + 1
        }
        if (dataResponse.data.data[i].severity === "medium" ){
            medium = medium + 1
        }
        if (dataResponse.data.data[i].severity === "low" ){
            low = low + 1
        }
    }
    critical = critical/dataResponse.data.data.length*100
    high = high/dataResponse.data.data.length*100
    medium = medium/dataResponse.data.data.length*100
    low = low/dataResponse.data.data.length*100

console.log("critical:", critical, "high:", high, "medium:", medium, "low", low)
}
    const pieData = [
        ['Severity', 'Percent'],
        ['Critical', critical],
        ['High', high],
        ['Medium', medium],
        ['Low', low],
        
      ]
      const pieOptions = {
        title: 'Grouped Findings By Severity',
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