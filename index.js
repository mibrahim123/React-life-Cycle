import React from "react";
import ReactDOM from "react-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.state.main = <Welcome user="ibrahim" />;
    this.del = this.del.bind(this);
  }

  del(){
    this.setState({main:""});
  }

  render() {
    return (
      <h1>
        hello World
        {this.state.main}
        <button onClick={this.del} >Delete Welcome</button>
      </h1>
      
    );
  }
}

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.name = "hello";
    this.handle = this.handle.bind(this);
  }

  handle() {
    //this.state.name="SHAIKH";
    this.setState({ name: "shaikh" });
    alert("abc" + this.props.user + this.state.name);
  }

  render() {
    return (
      <span>
        Hello {this.props.user} {this.state.name}
        <button onClick={this.handle}>Submit</button>
      </span>
    );
  }

  shouldComponentUpdate() {
    console.log("before update");
    return true;
  }

  componentDidUpdate() {
    console.log("i am updated");
  }
  componentDidMount() {
    console.log("i am mounted"); //alert("iam mounted");
  }
  componentWillUnmount() {
    console.log("now i am destroy");
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  rootElement
);
