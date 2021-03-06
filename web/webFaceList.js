import React from 'react';
import FaceEntry from './webFaceListEntry.js';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

var FaceList = (props) => (
  <div className="face-list">
    <ListGroup bsClass="list-group">
    {props.list.map((val, ind) => <ListGroupItem key={ind}><FaceEntry data={val} key={ind} updateCurrent={props.updateCurrent}/></ListGroupItem>)}
    </ListGroup>
  </div>
);

module.exports = FaceList;