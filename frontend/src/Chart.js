import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-annotation";
import axios from "axios";

const data = {
  labels: [
    "week1",
    "week2",
    "week3",
    "week4",
    "week5",
    "week6",
    "week7",
    "week8",
    "week9"
  ],
  datasets: [
    {
      label: "Minimum",
      fill: true,
      lineTension: 0.5,
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderJoinStyle: "round",
      pointRadius: 0,
      tooltipsEnabled: false,
      pointHitRadius: 0,
      data: [5, 5, 18, 1080, 7650, 25700, 13300, 4060, 3640]
    },
    {
      label: "Maximum",
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(211,211,211,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderJoinStyle: "round",
      pointRadius: 0,
      tooltipsEnabled: false,
      pointHitRadius: 0,
      data: [50, 426, 7340, 56500, 229000, 288000, 254000, 165400, 117000]
    },
    {
      label: "Values",
      fill: false,
      lineTension: 0.5,
      borderColor: "rgba(173,255,47,1)",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 4,
      pointRadius: 5,
      pointHitRadius: 20
    }
  ]
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    /*
      Method to obtain user data from the API backend. Takes in a userId and return a list of
      object containing the values used in the graphs. 
    */
    const userId = this.props.patientId;
    axios
      .get(`http://localhost:8000/api/data?user=${userId}`)
      .then(res => {
        var tempArr = [];
        res.data.map(key => {
          return tempArr.push(key.hcg_value);
        });
        data.datasets[2].data = tempArr;
        data.datasets[0].data = data.datasets[0].data.slice(0, tempArr.length);
        data.datasets[1].data = data.datasets[1].data.slice(0, tempArr.length);
        data.labels = data.labels.slice(0, tempArr.length);
        this.setState({ data: data });
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div>
        <h1>Line Chart</h1>
        <Line width={1000} height={600} data={this.state.data} />
      </div>
    );
  }
}

export default Chart;
