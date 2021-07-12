import React, { useState } from 'react'
import { DropzoneArea } from 'material-ui-dropzone';
import Menu from './Menu'
import Footer from './Footer'
import Header from './Header';

export default function UploadPage() {
  return (
    <div>
      <Menu />
      <Header title={'Upload Photo'} imageLink={`/Common/athens.webp`} />
      <Upload />
      <Footer />
    </div>
  )
}

function Upload() {
  const _URL = window.URL || window.webkitURL;
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState("");

  const updateFileState = (e) => { setFile(e[0]); }

  const validateFileAndPost = () => {
    if (!file) {
      alert('Please select a file')
      return;
    } else if (file.size > 1048576) {
      alert('Image size must be less than 1 MB');
      return
    }
    if (!file.name.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
      alert('Please select a valid image with proper extension. Supported types: jpg|jpeg|png|gif|webp');
      return
    }
    var img = new Image();
    var objectUrl = _URL.createObjectURL(file);
    img.onload = function () {
      if(this.width <= 0 || this.width > 1920 || this.height <= 0 || this.height > 1080){
        alert('Please select an image with max resolution 1920 x 1080.');
        return;
      }
      else{
        postData();
      }
      _URL.revokeObjectURL(objectUrl);
    };
    img.src = objectUrl;
  }
  const postData = () => {
    const formdata = new FormData()
    formdata.append('image', file)
    formdata.append('title', title)


    fetch('http://localhost:9000/images/post', {
      method: 'POST',
      body: formdata
    })
      .then(res => res.text())
      .catch(err => {
        console.error(err)
      })

    setFile(null)
    window.location.reload();
    alert("Uploaded successfully. Visit User Uploads to see the file.")
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="card p-3">
          <div className="row">
            <div className="col-12">

              <form>
                <div class="form-group row">
                  <label for="inputPassword" class="col-12 col-form-label">Upload Photo (Max size: 1MB)</label>
                  <div class="col-12">
                    <DropzoneArea acceptedFiles={['image/*']} dropzoneText={"Drag and drop an image here or click"} filesLimit={'1'}
                      maxFileSize={'1048576'} showFileNamesInPreview={true} onChange={(e) => { updateFileState(e) }}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div className="col-3 mt-4">
                    <button onClick={validateFileAndPost} type="button" className="btn btn-primary col-12">Upload</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
