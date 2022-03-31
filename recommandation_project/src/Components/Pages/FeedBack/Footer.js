import React from 'react';

const defaultFooterStyles = {
  height: '50px',
  boxSizing: 'border-box',
  background: '#fff',
  overflow: 'hidden'
}
// const closeBtnStyle = {
//   float:'left',
//   color: '#fff',
//   backgroundColor: '#DC143C',
//   lineHeight: '30px',
//   borderRadius: '3px',
//   border: '2px solid #ff4742',
//   fontSize: '13px',
//   fontWeight: 'bold'
// }
// const submitBtnStyle = {
//   float:'right',
//   color: '#fff',
//   backgroundColor: '#DC143C',
//   lineHeight: '30px',
//   borderRadius: '3px',
//   border: '2px solid #ff4742',
//   fontSize: '13px',
//   fontWeight: 'bold',
//  // marging:'50px 100px 100px 100px'
// }

const Footer = ({handleSubmit, footerStyles, handleClose}) => (
  <div style={footerStyles}>
    <div style={{padding:'10px'}}>

    {/* <button onClick={handleSubmit} style={{submitBtnStyle , paddingRight:'50px'}} type='button'>Submit</button> */}
    <button
        type="button" 
        class="btn btn-outline-secondary"
        fullWidth
        variant="contained"
        style={{margingRight:'50px'}}
        onClick={handleSubmit}
      >
        Submit
      </button>
    {/* <button onClick={handleClose} style={closeBtnStyle} type='button'>Close</button> */}
    </div>
  </div>
)

Footer.defaultProps = {
  footerStyles: defaultFooterStyles
}

export default Footer;
