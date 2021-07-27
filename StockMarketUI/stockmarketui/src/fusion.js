// // import React, { Component } from "react";
// // import ReactFC from "react-fusioncharts";

// // // Step 3 - Include the fusioncharts library
// // import FusionCharts from "fusioncharts";

// // // Step 4 - Include the chart type
// // import Column2D from "fusioncharts/fusioncharts.charts";

// // // Step 5 - Include the theme as fusion
// // import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// // // Step 6 - Adding the chart and theme as dependency to the core fusioncharts
// // ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// // const chartData = [
// //   {
// //     label: "Venezuela",
// //     value: "290",
// //   },
// //   {
// //     label: "Saudi",
// //     value: "260",
// //   },
// //   {
// //     label: "Canada",
// //     value: "180",
// //   },
// //   {
// //     label: "Iran",
// //     value: "140",
// //   },
// //   {
// //     label: "Russia",
// //     value: "115",
// //   },
// //   {
// //     label: "UAE",
// //     value: "100",
// //   },
// //   {
// //     label: "US",
// //     value: "30",
// //   },
// //   {
// //     label: "China",
// //     value: "30",
// //   },
// // ];

// // // Create a JSON object to store the chart configurations
// // const chartConfigs = {
// //   type: "column2d", // The chart type
// //   width: "700", // Width of the chart
// //   height: "400", // Height of the chart
// //   dataFormat: "json", // Data type
// //   dataSource: {
// //     // Chart Configuration
// //     chart: {
// //       caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
// //       subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
// //       xAxisName: "Country", //Set the x-axis name
// //       yAxisName: "Reserves (MMbbl)", //Set the y-axis name
// //       numberSuffix: "K",
// //       theme: "fusion", //Set the theme for your chart
// //     },
// //     // Chart Data - from step 2
// //     data: chartData,
// //   },
// // };

// // export default class fusion extends Component {
// //   render() {
// //     return <ReactFC {...chartConfigs} />;
// //   }
// // }

// import React, { Component } from "react";
// // Import fusioncharts.js files from fusioncharts module
// import FusionCharts from "fusioncharts";
// // Import the timeseries file from fusioncharts module
// import TimeSeries from "fusioncharts/fusioncharts.timeseries";
// // Import ReactFusioncharts from react-fusioncharts module
// // import ReactFC from 'react-fusioncharts';
// import ReactFC from "react-fusioncharts";

// // Add core FusionCharts module and TimeSeries module as dependecies in react-fusioncharts
// ReactFC.fcRoot(FusionCharts, TimeSeries);

// const jsonify = (res) => res.json();
// // This is the remote url to fetch the data.
// const dataFetch = fetch(
//   "https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/data.json"
// ).then(jsonify);
// // This is the remote url to fetch the schema.
// const schemaFetch = fetch(
//   "https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/schema.json"
// ).then(jsonify);

// class fusion extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // Here timeseriesDs is the configuration object which we will pass as a prop to our ReactFC component.
//       timeseriesDs: {
//         type: "timeseries",
//         renderAt: "container",
//         width: "600",
//         height: "400",
//         dataSource: {
//           caption: { text: "Online Sales of a SuperStore in the US" },
//           // Initially data is set as null
//           data: null,
//           yAxis: [
//             {
//               plot: [
//                 {
//                   value: "Sales ($)",
//                 },
//               ],
//             },
//           ],
//         },
//       },
//     };

//     // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
//     // parameters, one is data another is schema. Check the method definition to get more info.
//     this.createDataTable = this.createDataTable.bind(this);
//   }

//   createDataTable() {
//     Promise.all([dataFetch, schemaFetch]).then((res) => {
//       const data = res[0];
//       const schema = res[1];
//       // First we are creating a DataStore
//       const fusionDataStore = new FusionCharts.DataStore();
//       // After that we are creating a DataTable by passing our data and schema as arguments
//       const fusionTable = fusionDataStore.createDataTable(data, schema);
//       // After that we simply mutated our timeseries datasource by attaching the above
//       // DataTable into its data property.
//       const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
//       timeseriesDs.dataSource.data = fusionTable;
//       this.setState({
//         timeseriesDs,
//       });
//     });
//   }

//   // We are creating the DataTable immidietly after the component is mounted
//   componentDidMount() {
//     this.createDataTable();
//   }

//   render() {
//     return (
//       <div className="App">
//         <ReactFC {...this.state.timeseriesDs} />
//       </div>
//     );
//   }
// }

// export default fusion;
