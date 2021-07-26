/* xlsx.js (C) 2013-present  SheetJS -- http://sheetjs.com */
/* Notes:
   - usage: `ReactDOM.render( <SheetJSApp />, document.getElementById('app') );`
   - xlsx.full.min.js is loaded in the head of the HTML page
   - this script should be referenced with type="text/babel"
   - babel.js in-browser transpiler should be loaded before this script
*/
import React from "react";
import XLSX from "xlsx";
import DataService from "./DataService";
import AdminDashboard from "./AdminDashboard";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

class SheetJSApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [] /* Array of Arrays e.g. [["a","b"],[1,2]] */,
      cols: [] /* Array of column objects e.g. { name: "C", K: 2 } */,
    };
    this.handleFile = this.handleFile.bind(this);
    // this.exportFile = this.exportFile.bind(this);
  }
  handleFile(file) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        cellDates: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      console.log(rABS, wb);
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, {
        header: 1,
        raw: false,
        dateNF: "yyyy-mm-dd",
      });
      console.log(
        JSON.stringify(data) +
          "this data needs to be passed to rest endpoint to save prices"
      );
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws["!ref"]) });
      console.log(this.state.data);
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  }
  render() {
    return (
      <DragDropFile handleFile={this.handleFile}>
        <div className="row">
          <div className="col-xs-12">
            <DataInput
              handleFile={this.handleFile}
              uploadData={this.state.data}
            />
          </div>
        </div>
      </DragDropFile>
    );
  }
}

export default withRouter(SheetJSApp);

/* -------------------------------------------------------------------------- */

/*
  Simple HTML5 file drag-and-drop wrapper
  usage: <DragDropFile handleFile={handleFile}>...</DragDropFile>
    handleFile(file:File):void;
*/
class DragDropFile extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }
  suppress(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }
  onDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    const files = evt.dataTransfer.files;
    if (files && files[0]) this.props.handleFile(files[0]);
  }
  render() {
    return (
      <div
        onDrop={this.onDrop}
        onDragEnter={this.suppress}
        onDragOver={this.suppress}
      >
        {this.props.children}
      </div>
    );
  }
}

/*
  Simple HTML5 file input wrapper
  usage: <DataInput handleFile={callback} />
    handleFile(file:File):void;
*/
class DataInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploadedSuccessfully: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.props.handleFile(files[0]);
  }
  uploadFile() {
    DataService.uploadExcel(this.props.uploadData)
      .then((response) => {
        if (response.status === 200)
          this.setState({ isUploadedSuccessfully: true });
        alert("File uploaded succesfully");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error uploading excel" });
        console.log(this.state.errorMsg);
      });
  }
  loadSuccessfullMsg() {
    if (this.state.isUploadedSuccessfully === true) {
      return (
        <div className="uploadExcelSuccessful">
          <label>File Uploaded Successfully!</label>
        </div>
      );
    }
  }
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <div>
            <AdminDashboard />
          </div>
          <div className="addExcel">
            <div className="form">
              <label htmlFor="file">Upload Stock Price</label>
              <input
                type="file"
                className="uploadControl"
                id="file"
                accept={SheetJSFT}
                onChange={this.handleChange}
              />
              <div>
                <Button
                  className="uploadExcelButton"
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={() => this.uploadFile()}
                >
                  Upload
                </Button>
                {this.loadSuccessfullMsg}
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

/* list of supported file types */
const SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm",
]
  .map(function (x) {
    return "." + x;
  })
  .join(",");

/* generate an array of column objects */
const make_cols = (refstr) => {
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};
