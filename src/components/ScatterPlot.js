import React from 'react';
import ReactEcharts from "echarts-for-react";
import Data from '../Wine-Data.json'; // Data-Set

function ScatterPlot() {

    // Extracting Hue value from dataset into new array
    const hue = Data.map(a => a.Hue);
    // Extracting Color Intensity value from dataset into new array
    const colorIntensity = Data.map(({ ColorIntensity }) => ColorIntensity)

    const option = {
        xAxis: {
            type: 'category',
            name: 'Color Intensity', // X-Axis Label name
            data: [...colorIntensity]
        },
        yAxis: {
            type: 'value',
            name: 'Hue' // Y-Axis Label name
        },
        series: [
            {
                symbolSize: 7,
                data: [
                    ...hue // Used spread operator to provide values to be visualized
                ],
                type: 'scatter'
            }
        ]
    };

    return (
        <>
            <div className="container">
                <h1>Scatter Plot</h1>
            </div>
            <div className="chart">
                <ReactEcharts option={option} /> {/* Rendenering E-Chart with above data */}
            </div>
        </>
    )

}

export default ScatterPlot;
