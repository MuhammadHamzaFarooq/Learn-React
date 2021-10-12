import React from 'react'
import { Line } from "react-chartjs-2";

const LineChart = () => {


    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "JUL", "AUG", "SEP","OCT","NOV","DEC"],
      datasets: [
        {
          label: "First dataset",
          data: [0, 53, 85, 41, 44, 65,100 ,2 ,76 ,77 ,22,11 ],
          fill: false,
          backgroundColor: "rgba(75,002,192,0.2)",
          borderColor: "rgba(75,88,192,1)"
        },
        {
          label: "Second dataset",
          data: [ 25, 35, 51, 54, 76,0, 53, 85, 41, 44, 65,90 ],
          fill: true,
          borderColor: "#742774"
        }
      ]
    };
    
    return (
        <div style={{width:'50vw' , margin:'auto'}}>
            
        <Line data={data}  height={100} />
        </div>
    )
}

export default LineChart



