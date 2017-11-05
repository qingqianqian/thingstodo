import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import data from './data.json'
import { filteredList, key, list } from './selectors';

class Main extends React.Component {
  componentWillReceiveProps(p) {
    if (!this.props.saved && p.saved)
      alert('saved');
  }
  
  componentWillMount(){
    console.log('aa')
    //Get from DB first
    this.props.dispatch({ type: 'load', ad: this.props.asd });

    if (!((this.props.asd||[]).length > 0)) {
      this.props.dispatch({ type: 'loadF', ad: data });
    }  
  }

  whileOnClick = () => {
    this.props.dispatch({type:'search', ad: this.props.searchKey})
  }

  onClickToSave = x => {
    this.props.dispatch({type:'save', data: x})
  }

  onClickToEdit = x => {    
    this.props.history.push(`/edit/${x.num}`);
  }

  onClickToSaveAll = () => {
    this.props.dispatch({type:'saveAll', data: this.props.listAll});
  }

  change = e => this.props.dispatch({ type: 'key', key: e.target.value })

  render() {
    const p = this.props;
    const l = this.props.adf || {};  //from file
    const lf = Object.keys(l).map(x => l[x]);

    let l1 = this.props.asd || [];

    if (!l1.length > 0) {
      l1 = lf; // DB empty
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/music">
            <h1 className="App-title">Welcome to React!Click to go to artists</h1>
          </Link>  
          <button name="save all" onClick={this.onClickToSaveAll}>Save All</button>
        </header>
        <div>
          input: <input value={p.searchKey} onChange={this.change}/>
          <input type ="button" id="b1" name = "b1"  onClick={this.whileOnClick} value="a button"/>
        </div>

        <p className="App-intro">
        {l1.map((x, i) =>
          <div>
            <div>{x.num} blablabla</div>  
            <div>{x.title}</div>
            <div>{x.quote}</div>
            <div>{x.text}</div>
            <div>{x.imgs.map(y => <img src={y} alt='alt' />)}</div>  
            <div className="flexcontainer">
                <button id={`${i}`} name='click' onClick={() => this.onClickToSave(x)}>Save to DB</button>                
                <button id={`edit${i}`} name={`edit${i}`} onClick={()=>this.onClickToEdit(x)}>Edit</button>
            </div>
          </div>
        )}
        </p>
      </div>
    );
  }
}

export default connect(s => ({
  adf: filteredList(s),
  asd: s.asd,
  searchKey: key(s),
  listAll: list(s),
  saved: s.saved
}))(Main);
