import React from 'react';
import { connect } from 'react-redux';
import { filteredThing } from './selectors';

class Edit extends React.Component {
  componentWillMount() {
    this.props.dispatch({type:'edit', selectedId: this.props.match.params.id });
  }
  

  render() {
    const selectedThing = this.props.selectedThing || {};

    console.log(selectedThing);

    return (
      <div>
         <div>{selectedThing.title}</div>
         <div>{selectedThing.quote}</div>
         <div>{selectedThing.text}</div>
      </div>      
    );
  }
}
export default connect(s => ({ selectedThing: filteredThing(s), selectedId: s.selectedId}))(Edit);