import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


class A extends React.Component {
  constructor() {
    super()
    this.state = { name: "rahul", surname: 'verma', address: 'agra' }

  }



  render() {
    this.setState({
      ...this.state,
      name: 'ravi'
    })
    return <>
      <h1>{this.state.name} {this.state.surname} {this.state.address}</h1>
      <h1>Ok Labs {this.props.name} {this.props.surname} {this.props.children}</h1>
    </>


  }

}


// const root = ReactDOM.createRoot(document.getElementById('pranav'));
//const root = ReactDOM.createRoot(document.getElementsByClassName('pranav')[0]);
// const root = ReactDOM.createRoot(document.querySelector('div.pranav'));
const root = ReactDOM.createRoot(document.querySelector('div#pranav'));
root.render(

  // <h1>Hello</h1>
  <A name="Pranav" surname="Verma" >Agra</A>

);


