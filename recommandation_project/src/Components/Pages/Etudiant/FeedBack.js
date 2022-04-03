import FeedbackWidget from '@upstash/feedback';
import React from 'react';

class FeedBack extends React.Component{
    render(){
        return(


<FeedbackWidget
  type="full"
  //themeColor="#6d21de"
  title="Bienvenue 👋"
  description="Donnez Votre Avis concernant notre application"
  textColor="#ffffff"
  showOnInitial="true"
  metadata={{ page: "index", location: "Palo Alto, CA" }}
>
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="39"
    height="34"
    color="#ffffff"
    fill="currentColor"
    viewBox="0 0 256 256">
      <path
        d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"/>
    </svg>
    </FeedbackWidget>
    );}}
export default FeedBack;