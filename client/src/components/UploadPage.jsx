import React from 'react'
import { DropzoneArea } from 'material-ui-dropzone';
import { useDebounce } from 'use-debounce';
import Menu from '../Menu'
import Footer from '../Footer'
import Header from '../Header';

export default function UploadPage({sendRoute}) {
    const sendHome = (status) => { // the callback. Use a better name
        console.log("home",status);

        sendRoute(status);
        
      };
    return (
        
        <div>
            <Menu sendHome={sendHome} />
            <Header title={'Upload Photo'} imageLink={`/Assets/Spain/spain4.jpg`}/>
            <Upload />

            <Footer/>
        </div>
    )
}

function Upload() {

    const [file, setFile] = useState(null)
    const [title,setTitle] = useState("");
   
    const selectedHandler = (e,file) => { setFile(e[0]); }

	const selectedHandlerTitle = e => {
		setTitle(e.target.value)
	}

  const sendHandler = () => {
    if(!file){
      alert('You must upload atleast a file')
      return
    }else if (file.size > 1048576){
      alert('Image must be less than 1 MB');
      return
    }
    if(!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      alert('Select valid image');
      return
    }
    
    const formdata = new FormData()
    formdata.append('image', file)
    formdata.append('title', title)


    fetch('http://localhost:9000/images/post', {
      method: 'POST',
      body: formdata
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => {
      console.error(err)
    })

    document.getElementById('destination').value = null
    setFile(null)
    window.location.reload();
    alert("Thank you for upload image");

  }


    return (
        <div>
            <div className="container mt-5">
                <div className="card p-3">
                    <div className="row">
                    <div className="col-12">

                    <form>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-12 col-form-label">Upload Photo</label>
                            <div class="col-12">
                                <DropzoneArea
                                     
                                    acceptedFiles={['image/*']}
                                    dropzoneText={"Drag and drop an image here or click"}
                                    filesLimit={'1'}
                                    maxFileSize = {'1048576'}
                                    
                                    showFileNamesInPreview={true}
                                    onChange={(e,files) => {
                                        selectedHandler(e,file)
                                    }}
                                />                    
                            </div>
                        </div>
                        <div class="form-group row">
                            <div className="col-3 mt-4">
                            <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Upload</button>
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
