function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";
class MyForm extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "mySubmitHandler",








    event => {
      event.preventDefault();
      let x = this.state.name;
      let y = this.state.email;
      let z = this.state.message;
      let err = "";

      if (x == "" || y == "" || z == "") {
        err = /*#__PURE__*/React.createElement("div", { class: "alert alert-warning", role: "alert" }, /*#__PURE__*/React.createElement("strong", null, " Please fill all the required fields "));
        this.setState({ errormessage: err });

      } else if (confirm("Do you want to submit?")) {
        let myelement = /*#__PURE__*/
        React.createElement("div", { class: "table-responsive" }, /*#__PURE__*/
        React.createElement("table", { class: "table table-bordered" }, /*#__PURE__*/
        React.createElement("thead", { class: "thead-dark" }, /*#__PURE__*/
        React.createElement("tr", null, /*#__PURE__*/
        React.createElement("th", { scope: "col" }, "#"), /*#__PURE__*/
        React.createElement("th", { scope: "col" }, "Name"), /*#__PURE__*/
        React.createElement("th", { scope: "col" }, "Email"), /*#__PURE__*/
        React.createElement("th", { scope: "col" }, "Message"))), /*#__PURE__*/


        React.createElement("tbody", null, /*#__PURE__*/
        React.createElement("tr", null, /*#__PURE__*/
        React.createElement("th", { scope: "row" }, "1"), /*#__PURE__*/
        React.createElement("td", null, this.state.name), /*#__PURE__*/
        React.createElement("td", null, this.state.email), /*#__PURE__*/
        React.createElement("td", { class: "msg" }, this.state.message)))));







        ReactDOM.render(myelement, document.getElementById("root"));
      } else
      {

      }
    });_defineProperty(this, "myChangeHandler",
    event => {
      this.setState({ [event.target.name]: event.target.value });
    });this.state = { name: "", email: "", message: "", errormessage: "" };}
  render() {
    return /*#__PURE__*/(
      React.createElement("form", { onSubmit: this.mySubmitHandler }, /*#__PURE__*/
      React.createElement("div", { class: "container" }, /*#__PURE__*/
      React.createElement("h1", null, "Contact us:"),
      this.state.errormessage, /*#__PURE__*/
      React.createElement("div", { class: "form-group" }, /*#__PURE__*/
      React.createElement("label", null, "Name*"), /*#__PURE__*/
      React.createElement("input", { type: "text", class: "form-control", placeholder: "Enter name", name: "name", onChange: this.myChangeHandler })), /*#__PURE__*/

      React.createElement("div", { class: "form-group" }, /*#__PURE__*/
      React.createElement("label", null, "Email address *"), /*#__PURE__*/
      React.createElement("input", { type: "email", class: "form-control", placeholder: "name@example.com", name: "email", onChange: this.myChangeHandler })), /*#__PURE__*/

      React.createElement("div", { class: "form-group" }, /*#__PURE__*/
      React.createElement("label", null, "Your Message* "), /*#__PURE__*/
      React.createElement("textarea", { class: "form-control", rows: "3", placeholder: "write your message ", name: "message", onChange: this.myChangeHandler })), /*#__PURE__*/


      React.createElement("button", { type: "submit", class: "btn btn-primary" }, "Submit"))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MyForm, null), document.getElementById("root"));