import React, { Component } from 'react';
import Button from './Button';
import Form from './Form';
import PropTypes from 'prop-types';
import "../../../styles/PopUpMessage/PopUpFile.css"

const isEmpty = str => !str.trim().length;

const handleCustomPosition = ((position, formStyles) => {
	var customFormStyles;
	if (position==="right") {
		customFormStyles = {...formStyles, left: "5%"};
	}
	else {
		customFormStyles = {...formStyles, right: "5%"};
	} 
	return customFormStyles;
})
let finEmail ='';
class Feedback extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showForm: true,
			showModal: false,
			nameInput: '',
			messageInput: '',
			emailInput: '',
			ratingInput: -1,
			Email:''
		
		};
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleMessageInput = this.handleMessageInput.bind(this);
	}
	
	handleMessageInput(inputName, content) {
		if (inputName === 'Email') {
			this.setState({ emailInput: content });
			console.log (content);
		//	console.log (this.state.emailInput);
			//this.setState({finEmail:content});
			// finEmail = content;
			// console.log(finEmail)

		} 
		 else if (inputName === 'Rating') {
			this.setState({ ratingInput: content });
		} else if (inputName === 'Message') {
			this.setState({ messageInput: content });
		}
	}
	handleRatingInput(ratingInput) {
		this.setState({ ratingInput: ratingInput });
	}
	handleNameInput(nameInput) {
		this.setState({ nameInput: nameInput });
		
	}
	handleEmailInput(emailInput) {
		this.setState({ emailInput: emailInput });
	
		
	}
	
	handleButtonClick() {
		const { handleButtonClick } = this.props;
		this.setState({ showButton: false, showForm: true });
		handleButtonClick();
	}
	fetchData(){
		var id = localStorage.getItem("LoginUser");
		fetch(`http://127.0.0.1:8000/PcdApp/recruteur/${id}/`)
		  
		  .then(response=>response.json())
		  .then((data)=>{
			  this.setState({
				  Email:data.Email
			  });
			   console.log (this.state.Email)
			  console.log(localStorage.getItem("LoginUser"));
			  console.log(this.state.data);
		  });
	  }
	  
	  componentDidMount(){
		  this.fetchData();
	  }
	handleSubmit() {
		const { showButtonOnSubmit, handleSubmit, handleClose } = this.props;
		// Check if the values are missing.
		if ( isEmpty(this.state.emailInput) || isEmpty(this.state.messageInput) || (this.state.ratingInput===-1)) {
			alert("Fields are missing!");
		} else {
			if (this.state.Email == this.state.emailInput){
		(handleSubmit({
				Login: localStorage.getItem("LoginUser"),
				Message: this.state.messageInput,
				Rating: this.state.ratingInput,
				Email: this.state.emailInput
			}));}
			else {
				alert ('incorrecte')
			}
			if (showButtonOnSubmit) {
				this.setState({ showButton: true });
			}
			this.setState({ showForm: false, nameInput: '', messageInput: '', ratingInput: -1, emailInput: '' });
			handleClose();
		}
	}
	handleClose() {
		const { handleClose, showButtonOnClose } = this.props;
		if (showButtonOnClose) {
			this.setState({ showButton: true });
		}
		this.setState({ showForm: false });
		handleClose();
	}

	render() {
		const {
			headerText,
			position,
			headerStyles,
			headerBtnStyles,
			headerBtnText,
			bodyText,
			showNameInput,
			showEmailInput,
			showRatingInput,
			showMessageInput,
			numberOfStars,
			style
		} = this.props;

		return (
			<div>
				{this.state.showForm &&
				
				
						<Form
							style={style}
							headerText={headerText}
							numberOfStars={numberOfStars}
							position={position}
							headerStyles={headerStyles}
							headerBtnStyles={headerBtnStyles}
							headerBtnText={headerBtnText}
							handleClose={this.handleClose}
							handleSubmit={this.handleSubmit}
							bodyText={bodyText}
							showNameInput={showNameInput}
							showEmailInput={showEmailInput}
							showRatingInput={showRatingInput}
							showMessageInput={showMessageInput}
							nameInput={this.state.nameInput}
							emailInput={this.state.emailInput}
							ratingInput={this.state.ratingInput}
							messageInput={this.state.messageInput}
							handleMessageInput={this.handleMessageInput}
							handleCustomPosition={handleCustomPosition}
						/>
			
				}
				{//this.state.showButton // &&
					// <Button
					// 	position={position}
					// 	styles={buttonStyles}
					// 	text={buttonText}
					// 	handleButtonClick={this.handleButtonClick}
					// 	handleCustomPosition={handleCustomPosition}
					// />
				}
			</div>
		)
	}
}

Feedback.propTypes = {
	headerText: PropTypes.string,
	bodyText: PropTypes.string,
	position: PropTypes.string,
	handleClose: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleButtonClick: PropTypes.func,
	showButtonOnClose: PropTypes.bool,
	showButtonOnSubmit: PropTypes.bool,
	buttonStyles: PropTypes.object,
	headerStyles: PropTypes.object,
	headerBtnStyles: PropTypes.object,
	bodyStyles: PropTypes.object,
	footerStyles: PropTypes.object,
	buttonText: PropTypes.string,
	headerBtnText: PropTypes.string,
	showEmailInput: PropTypes.bool,
	showRatingInput: PropTypes.bool,
	showMessageInput: PropTypes.bool
}

Feedback.defaultProps = {
	position: 'right',
	handleSubmit: () => { },
	handleClose: () => { },
	handleButtonClick: () => { },
	showButtonOnClose: true,
	showButtonOnSubmit: true,
	modal: false
}

export default Feedback;
