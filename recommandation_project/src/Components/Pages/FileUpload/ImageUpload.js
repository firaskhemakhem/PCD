import * as React from 'react';
import { Component } from 'react';
import { styled } from '@mui/material/styles';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Grid } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});

class ImageUpload extends Component {
  state = {
    data: { Id_Image: '', Login: localStorage.getItem('LoginUser'), Image: '' }
  }
  newImage = event => {
    const uploadData = new FormData();
    uploadData.append('Id_PDF', this.state.data.Id_Image);
    uploadData.append('Login', this.state.data.Login);
    uploadData.append('PDF', this.state.data.Image, this.state.data.Image.name);
    fetch("http://127.0.0.1:8000/PcdApp/media/pdf/", {
      method: 'POST',
      body: uploadData
    })
      .then(data => data.json())
      .then((result) => {
        console.log(result)
      })
      .catch(error => console.log(error))
  }
  inputChanged = (event) => {
    const cred = this.state.data;
    cred[event.target.name] = event.target.files[0];
    this.setState({ data: cred });
    console.log(this.state.data);
  }
  render() {
    return (
      <div class="custom-file">
        <Grid item
          xs={20}
          sm={10}>
          <Grid
          item
          xs={20}
          sm={10}>
            <input type="file" class="form-control" id="customFile" name="Image" onChange={this.inputChanged} required />
          </Grid>
          <Grid container 
          xs={8}
          sm={30}
          justifyContent="flex-end">
            <button style={{marginTop: '-40px', marginRight: '-15px', height: '38px'}} class="btn btn-outline-secondary" onClick={this.newImage}>
              <FileUploadIcon />
            </button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default ImageUpload;