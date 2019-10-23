import React from 'react';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';

class About extends React.Component {
  
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps() is called !');
    if(prevState.value === '') {
      return {
        value: 'about',
      }
    }
    return null;
  }

  /* initially */
  constructor(props) {
    console.log('constructor() is called !');
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: ''};
  }
  
  /* do render at this step */
  componentDidMount(){
    console.log('componentDidMount() is called !');
  }

  /* when change is happened */
  shouldComponentUpdate(nextProps,nextState){
    const {value: oldValue} = this.state;
    const {value: newValue} = nextState;
    if(oldValue!== newValue) {
      console.log(`shouldComponentUpdate() is called current state is ${oldValue} next state is ${newValue}`);
      return true;
    }
    return false;
  }

  componentDidUpdate(){
    console.log(`componentDidUpdate() is called state is ${this.state.value}`);
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() is called !');
  }
  
  render() {
    console.log(`rendering with state ${this.state.value}!`);
    return(
      <>
        <ul>
          <li><h1> React LifeCycle Testing - About</h1></li>
          <li><input value={this.state.value} onChange={this.handleChange} /></li>
          <li><p> React input shows up here <strong>{this.state.value}</strong></p></li>
          <li><p> compare difference among four types page switch [all to home page]</p></li>
        </ul>
        <ul className="flex">
          <li><a href="/">origin html link</a></li>
          <li>
            <button onClick={(e)=>{e.preventDefault(); window.location.href="/";}}>
              Hard switch page
            </button>
          </li>
          <li><button onClick={(e)=>{e.preventDefault(); this.props.history.push('/');}}>
            Switch page as a SPA
          </button></li>
          <li><Link to="/">React router link component</Link></li>
        </ul>
      </>
    )
  }
}

export default withRouter(About);