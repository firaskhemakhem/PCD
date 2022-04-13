import React,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const formStyles = {
    position: 'center',
    backgroundColor: '#FAFAFA',
    border: '1px solid #dcdcdc',
    borderRadius: '6px 6px 0 0',
    zIndex: '3',
    bottom: '20px',
    padding:'5px 5px',
    margin:'50px 450px 50px 500px '
  //  marginright :'100px'
}

class Form extends Component {
  state = {
    credentials: {}
  }
  fetchData(){
		var id = localStorage.getItem("LoginUser");
		fetch(`http://127.0.0.1:8000/PcdApp/feedback/${id}/`)
		  
		  .then(response=>response.json())
		  .then((data)=>{
			  this.setState({
				  credentials:data
			  });
			  console.log(this.state.credentials);
		  });
	  }
	  
	  componentDidMount(){
		  this.fetchData();
	  }

  render(){
    const {
      headerStyles,
      headerText,
      position,
      handleClose,
      handleSubmit,
      handleMessageInput,
      handleEmailInput,
      handleRatingInput,
      handleCustomPosition,
      messageInput,
      emailInput,
      ratingInput,
      showEmailInput,
      showMessageInput,
      showRatingInput,
      numberOfStars,
      bodyText,
    } = this.props;

    var customFormStyles = handleCustomPosition(position, formStyles); 
    return(
      <div style={{...customFormStyles , ...this.props.style}}>
        { <Header
          styles={headerStyles}
          headerText={headerText}
         // handleClose={handleClose}
          /> }
        <Body
          bodyText={bodyText}
          numberOfStars={numberOfStars}
          showEmailInput={showEmailInput}
          showMessageInput={showMessageInput}
          showRatingInput={showRatingInput}
          handleMessageInput={handleMessageInput}
          handleEmailInput={handleEmailInput}
          handleRatingInput={handleRatingInput}
          // messageInput={this.state.crede.Message}
          messageInput={messageInput}
          emailInput={emailInput}
          ratingInput={ratingInput}
        />
        { <Footer
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          /> }
      </div>
    )
  }

}

export default Form;
