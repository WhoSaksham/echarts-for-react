import React from 'react';
import ReactEcharts from "echarts-for-react";
import Data from '../Wine-Data.json'; // Data-Set

function BarGraph() {

    // Making new array with data-set containing only Alcohol-1 category
    const arr1 = Data.filter((value) => {
        return value.Alcohol === 1;
    });

    // Making new array with data-set containing only Alcohol-2 category
    const arr2 = Data.filter((value) => {
        return value.Alcohol === 2;
    });

    // Making new array with data-set containing only Alcohol-3 category
    const arr3 = Data.filter((value) => {
        return value.Alcohol === 3;
    });

    // Calculating Average of Array1 with any input which has Alcohol-1 category
    const calcAvgOfArr1 = value => {
        const total = arr1.map(x => x[value]).reduce((a, c) => a + c)
        return total / arr1.length
    }

    // Calculating Average of Array2 with any input which has Alcohol-2 category
    const calcAvgOfArr2 = value => {
        const total = arr2.map(x => x[value]).reduce((a, c) => a + c)
        return total / arr2.length
    }

    // Calculating Average of Array3 with any input which has Alcohol-3 category
    const calcAvgOfArr3 = value => {
        const total = arr3.map(x => x[value]).reduce((a, c) => a + c)
        return total / arr3.length
    }

    // Providing input 'Malic Acid' to calcAvg function and storing their avg values in variables
    const val1 = calcAvgOfArr1('Malic Acid')
    const val2 = calcAvgOfArr2('Malic Acid')
    const val3 = calcAvgOfArr3('Malic Acid')

    const option = {
        xAxis: {
            type: 'category',
            data: ['Alcohol-1', 'Alcohol-2', 'Alcohol-3'], // Plotting the categories of alcohol
            name: 'Alcohol Category' // X-Axis Label name
        },
        yAxis: {
            type: 'value',
            name: 'Malic Acid' // Y-Axis Label name
        },
        series: [
            {
                data: [val1, val2, val3], // Providing average malic acid values to be plotted
                type: 'bar'
            }
        ]
    };

    return (
        <>
            <div className="container">
                <h1>Bar Graph</h1>
            </div>
            <div className="chart">
                <ReactEcharts option={option} /> {/* Rendenering E-Chart with above data */}
            </div>
        </>
    )
}

export default BarGraph;