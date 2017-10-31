import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import data from './data.json'
import { filteredList, key } from './selectors';

class Main extends React.Component {

  componentWillMount(){
    console.log('aa')
    this.props.dispatch({type:'load', ad: data});
  }

  whileOnClick = () => {
    this.props.dispatch({type:'search', ad: this.props.searchKey})
  }

  onClickToSave = x => {
    this.props.dispatch({type:'save', data: x})
  }


  change = e => this.props.dispatch({ type: 'key', key: e.target.value })

  render() {
    const p = this.props;
    const l = this.props.asd || {};
    const l1 = Object.keys(l).map(x => l[x]);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/music">
            <h1 className="App-title">Welcome to React</h1>
          </Link>  
        </header>
        <div>
          input: <input value={p.searchKey} onChange={this.change}/>
          <input type ="button" id="b1" name = "b1"  onClick={this.whileOnClick} value="a button"/>
        </div>

        <p className="App-intro">
        {l1.map((x, i) =>
          <div>
            <div>{x.title}</div>
            <div>{x.quote}</div>
            <div>{x.text}</div>
            <div>{x.imgs.map(y => <img src={y} alt='alt' />)}</div>  
            <div><button id={`${i}`} name='click' onClick={() => this.onClickToSave(x)}>Save to DB</button></div>
          </div>
        )}
        </p>
      </div>
    );
  }
}

export default connect(s=>({asd: filteredList(s), searchKey: key(s)}))(Main);
