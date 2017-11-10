import React from 'react';
import { connect } from 'react-redux';
import { filteredThing } from './selectors';
import Actions from './actions';
class Edit extends React.Component {
  componentWillMount() {
    this.props.setEdit(this.props.match.params.id);
  }
  

  render() {
    const selectedThing = this.props.selectedThing || {};

    console.log(selectedThing);

    const divStyle = {
      height: '500px',
      color: 'blue',
      background: 'lightgreen',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around'
    };

    const inputWid = {
      width: '500px',
      minWidth: '500px',
      maxWidth: '600px'
    }  

    return (
      <div style={divStyle}>
        <div><label for="title">Title: </label><input id="title" type="text" value={selectedThing.title} style={inputWid} /></div>
         <div><label for="quote">Quote: </label><textarea id="quote" rows="6" cols="100"  value={selectedThing.quote} /></div>
         <div><label for="textT">Text: </label><textarea id="textT" rows="6" cols="100" value={selectedThing.text} /></div>
         <div><button >Change</button></div>
      </div>      
    );
  }
}
export default connect(s => ({ selectedThing: filteredThing(s)}), Actions)(Edit);