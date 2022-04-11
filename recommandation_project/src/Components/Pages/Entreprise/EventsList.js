import React from "react";
import Card from "./Card";

export default function EventsList(props) {

  const eventsList = props.data.map(event => (

    <Card
      Login={event.Login}
      
     // image={event.image}
      Nom={event.Nom}
      Adresse={event.Adresse}
      Email={event.Email}
      Domaine={event.Domaine}
    />
  ));

  return <div>{eventsList}</div>;
}