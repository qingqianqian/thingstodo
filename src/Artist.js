import React from 'react';
import { connect } from 'react-redux';

class Artist extends React.Component {
  componentWillMount() {
    this.props.dispatch({type:'get_artist', artistName: this.props.match.params.name });
  }
  

  render() {
    const artist = this.props.artist || {};
    return (
      <div>
        {artist.name}<img src={artist.img} alt={artist.name} />
      </div>      
    );
  }
}
export default connect(s => ({ artist: s.artist}))(Artist);