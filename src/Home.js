import React from 'react';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';

class Home extends React.Component {
  
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps() is called !');
    if(prevState.value === 'default value') {
      return {
        value: 'home page',
      }
    }
    return null;
  }

  /* initially */
  constructor(props) {
    console.log('constructor() is called !');
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'default value'};
  }
  
  /* do render at this step */
  componentWillMount(){
    console.log('componentWillMount() is called !');
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
          <li><h1> React LifeCycle Testing - Home</h1></li>
          <li><input value={this.state.value} onChange={this.handleChange} /></li>
          <li><p> React input shows up here <strong>{this.state.value}</strong></p></li>
          <li><p> compare difference among four types page switch [all to about page]</p></li>
        </ul>
        <ul className="flex">
          <li><a href="/about">origin html link</a></li>
          <li>
            <button onClick={(e)=>{e.preventDefault(); window.location.href="/about";}}>
              Hard switch page
            </button>
          </li>
          <li><button onClick={(e)=>{e.preventDefault(); this.props.history.push('/about');}}>
            Switch page as a SPA
          </button></li>
          <li><Link to="/about">React router link component</Link></li>
        </ul>
      </>
    )
  }
}

export default withRouter(Home);