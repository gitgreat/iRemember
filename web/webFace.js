import React from 'react';
import $ from 'jquery';

import FaceList from './webFaceList.js';
import FaceCurrent from './webFaceCurrent.js';
import FaceForm from './webFaceForm.js';

class Face extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{subjectName:"test", photos:["http://pngimg.com/upload/pills_PNG16521.png", "http://pngimg.com/upload/pills_PNG16521.png", "http://pngimg.com/upload/pills_PNG16521.png"], description:"testfiles"}, {subjectName:"test1", photos:["http://pngimg.com/upload/pills_PNG16521.png", "http://pngimg.com/upload/pills_PNG16521.png"], description:"testfiles1"}],
      current: {subjectName:"test", photos:["http://pngimg.com/upload/pills_PNG16521.png", "http://pngimg.com/upload/pills_PNG16521.png", "http://pngimg.com/upload/pills_PNG16521.png"], description:"testfiles"},
      lightbox: true,
      showForm: false,
      editModeOn: false,
      subjectName: '',
      photos: ["http://pngimg.com/upload/pills_PNG16521.png"],
      description: ''
    };
  }

  showForm() {
    this.setState({
      showForm: true
    })
  }

  hideForm() {
    this.setState({
      showForm: false
    })
  }

  updateCurrent(current) {
    this.setState({
      current: current
    })
  }

  getInput(event) {
    var key = event.target.getAttribute('class');
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  getPhotos(e){
    this.setState({
      photos: e.target.files
    })
    console.log(e.target.files)
  }

  editModeOn() {
    this.setState({
      editMode: true
    })
  }

  editModeOff() {
    this.setState({
      editMode: false
    })
  }

  edit(current) {
    this.editModeOn();
    this.setState({
      subjectName: current.subjectName,
      photos: current.photos,
      description: current.description
    })
    this.showForm();
  }

  closeLightbox() {
    this.setState({
      lightbox: false
    })
  }

  submitForm() {
    var that = this;
    var form = {};
    form.id = this.props.id;
    form.name = this.props.name;
    form.subjectName = this.state.subjectName;
    form.photos = this.state.photos;
    form.description = this.state.description;
    console.log(JSON.stringify(form.photos))
    $.ajax({
      method: 'POST',
      url: '/web/face',
      data: form,
      contentType: '',
      dataType: 'JSON',
      success: function (res) {
        console.log('success', res);
        that.editModeOff();
        that.hideForm();
        that.updateCurrent(res);
      },
      error: function (err) {
        console.log('error', err);
      }
    })

  }

  render() {
    return (
      <div className="face">
        <div>{
          this.state.showForm? null : <button type="button" onClick={this.showForm.bind(this)}>Add New Face</button>
        }</div>
        <FaceList 
          list={this.state.list}
          getInput={this.getInput.bind(this)}
          updateCurrent={this.updateCurrent.bind(this)}/>
        <div>{
          this.state.showForm? 
            <FaceForm 
              getInput={this.getInput.bind(this)} 
              getPhotos={this.getPhotos.bind(this)}
              submitForm={this.submitForm.bind(this)}
              editMode={this.state.editMode}
              subjectName={this.state.subjectName}
              photos={this.state.photos} 
              description={this.state.description}/> 
            : <FaceCurrent 
                lightbox={this.state.lightbox}
                closeLightbox={this.closeLightbox.bind(this)}
                current={this.state.current}
                edit={this.edit.bind(this)}/>
        }</div>
      </div>
    )
  }
}

module.exports = Face;