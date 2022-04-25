import React from 'react';

import StarRatings from 'react-star-ratings';

class FeedBackEntrp extends React.Component {
    constructor() {
        super();
        this.state = {
            dataFeedBack: [],
            isLoginFeed: false

        }
    }
    fetchData() {
        fetch(`http://127.0.0.1:8000/PcdApp/feedbacketurec/`).then(response => response.json()).then((result) => {
            console.log(result);
            console.log(window.location.href.split('/')[4]);

            // console.log(localStorage.getItem("Login"))
            for (let i = 0; i < result.length; i++) {
                if (result[i].Recruteur == window.location.href.split('/')[4]) {
                    this.setState({
                        dataFeedBack: [
                            ...this.state.dataFeedBack,
                            result[i]
                        ]
                    })
                    this.setState({isLoginFeed: true})
                    localStorage.setItem('isLoginFeed', true)
                }

            }
            console.log(this.state.dataFeedBack);
            console.log(this.state.isLoginFeed);
        });
    }
    componentDidMount() {
        this.fetchData();
    }
    render() {
        const feedData = this.state.dataFeedBack;
        const rowsFeed = feedData.map((feed) => (this.state.isLoginFeed && <tr>
            <td width={'273px'}>
                {
                feed.FeedBack
            }</td>
            <td>
                <StarRatings rating={
                        feed.Rating
                    }
                    starRatedColor="#023C59"
                    numberOfStars={5}
                    name='Rating'
                    starDimension="35px"
                    starSpacing="10px"/>
            </td>

        </tr>));
        return (
            <div> {
                !this.state.isLoginFeed && <div>
                    Aucun Avis concernant cette entreprise est existe
                </div>
            }
                {
                this.state.isLoginFeed && <div>
                    <div style={
                        {
                            border: '4px solid #023C59',
                            borderRadius: '8px',
                            paddingTop: '15px',
                            // marginRight: '200px',
                            // marginLeft: '200px'
                        }
                    }>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Message</th>
                                    <th scope="col">Rating</th>
                                </tr>


                            </thead>
                            <tbody> {rowsFeed} </tbody>
                        </table>

                    </div>

                </div>
            } </div>
        );
    }
}
export default FeedBackEntrp;
