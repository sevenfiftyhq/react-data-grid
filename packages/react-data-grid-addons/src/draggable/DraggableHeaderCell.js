import { DragSource } from 'react-dnd';
import React, {PropTypes, Component} from 'react';
import { _constants, HeaderCell } from 'react-data-grid';
const { DragItemTypes } = _constants;

class DraggableHeaderCell extends Component {

  componentDidMount() {
    let connectDragPreview = this.props.connectDragPreview;
    let img = new Image();
    img.onload = function() {
      connectDragPreview(img);
    };
    img.onerror = function() {
      let canvas = document.createElement('canvas');
      canvas.width = 150;
      canvas.height = 200;
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = '#eee';
        ctx.fillRect(0, 0, 150, 35);
        ctx.fillStyle = '#ddd';
        ctx.fillRect(0, 35, 150, 1);
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 37, 150, 163);
        img.src = canvas.toDataURL('image/png');
      }
    };
    img.src = './assets/images/drag_column_full.png';
  }

  setScrollLeft(scrollLeft) {
    let node = ReactDOM.findDOMNode(this);
    node.style.webkitTransform = `translate3d(${scrollLeft}px, 0px, 0px)`;
    node.style.transform = `translate3d(${scrollLeft}px, 0px, 0px)`;
  }

  render() {
    const { connectDragSource, isDragging} = this.props;
    if (isDragging) {
      return null;
    }
    return connectDragSource(<div style={{cursor: 'move'}}><HeaderCell {...this.props}/></div>);
  }
}

DraggableHeaderCell.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
  };
}

const headerCellSource = {
  beginDrag(props) {
    return props.column;
  },
  endDrag(props) {
    return props.column;
  }
};

export default DragSource(DragItemTypes.Column, headerCellSource, collect)(DraggableHeaderCell);
