import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, TimeSeries);

const dataSource = {
  chart: {},
  caption: {
    text: "Stock price Analysis",
  },
  series: "Type",
  yaxis: [
    {
      plot: [
        {
          value: "Share Price",
          //   connectnulldata: true
        },
      ],
      title: "Share Price",
      format: {
        prefix: "Rs",
      },
    },
  ],
};

export default class CompanyCharts extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchData = this.onFetchData.bind(this);
    this.state = {
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "600",
        height: "400",
        dataSource,
      },
    };
  }

  componentDidMount() {
    this.onFetchData();
  }

  onFetchData() {
    let schema = [
      {
        name: "Date",
        type: "date",
        format: "%Y-%m-%d",
      },
      {
        name: "Company Name",
        type: "string",
      },
      {
        name: "Share Price",
        type: "number",
      },
    ];

    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    function dateFormat(d) {
      var t = new Date(d);
      return (
        t.getDate() + "-" + monthNames[t.getMonth()] + "-" + t.getFullYear()
      );
    }

    let data = this.props.finalList;
    console.log("111111111111111111111111111111111111111111");
    console.log(data);
    const fusionDataStore = new FusionCharts.DataStore();
    const fusionTable = new FusionCharts.DataStore().createDataTable(
      data,
      schema
    );
    const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
    timeseriesDs.dataSource.data = fusionTable;
    this.setState({
      timeseriesDs,
    });
    console.log(this.state.timeseriesDs);
  }

  render() {
    return (
      <div>
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          "loading"
        )}
      </div>
    );
  }
}

// import React from "react";
// import FusionCharts from "fusioncharts";
// import TimeSeries from "fusioncharts/fusioncharts.timeseries";
// import ReactFC from "react-fusioncharts";

// ReactFC.fcRoot(FusionCharts, TimeSeries);

// const jsonify = (res) => res.json();
// const dataFetch = fetch(
//   "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json"
// ).then(jsonify);
// const schemaFetch = fetch(
//   "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json"
// ).then(jsonify);

// const dataSource = {
//   chart: {},
//   caption: {
//     text: "Sales Analysis",
//   },
//   subcaption: {
//     text: "Grocery & Footwear",
//   },
//   series: "Type",
//   yaxis: [
//     {
//       plot: "Sales Value",
//       title: "Sale Value",
//       format: {
//         prefix: "$",
//       },
//     },
//   ],
// };

// export default class CompanyCharts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onFetchData = this.onFetchData.bind(this);
//     this.state = {
//       timeseriesDs: {
//         type: "timeseries",
//         renderAt: "container",
//         width: "600",
//         height: "400",
//         dataSource,
//       },
//     };
//   }

//   componentDidMount() {
//     this.onFetchData();
//   }

//   onFetchData() {
//     Promise.all([dataFetch, schemaFetch]).then((res) => {
//       const data = res[0];
//       const schema = res[1];
//       console.log(data);
//       console.log(schema);
//       const fusionTable = new FusionCharts.DataStore().createDataTable(
//         data,
//         schema
//       );
//       const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
//       timeseriesDs.dataSource.data = fusionTable;
//       this.setState({
//         timeseriesDs,
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.timeseriesDs.dataSource.data ? (
//           <ReactFC {...this.state.timeseriesDs} />
//         ) : (
//           "loading"
//         )}
//       </div>
//     );
//   }
// }
