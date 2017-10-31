import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Music extends React.Component {
  componentWillMount() {
    this.props.dispatch({type:'get_artists'});
  }


  //getArtist = x =>
  //  this.props.dispatch({ type: 'get_artist', artistName: x });,


  render() {
    return (
      <div>
        {(this.props.artists || []).map(a =>
          <div>
            <div>
              <Link to={`/artist/${a.name}`}>{a.name}</Link>
            </div>
            <div>
              <img src={`http://192.168.1.136:1000${a.img}`} alt={a.name} />
            </div>
          </div>
        )}
      </div>      
    );
  }
}
export default connect(s => ({ artists: s.artists}))(Music);