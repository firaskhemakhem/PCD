import React from "react";
import Card from "./Card";

export default function EventsList(props) {
 

  const eventsList = props.data.map(event => (
    

    <Card

      Id_sujet={event.Id_sujet}
      Titre={event.Titre}
      Description={event.Description}
      duree={event.duree}
      Domaine={event.Domaine}
      Tech={event.Tech}
      Att={event.Att}
      paye={event.paye}
      Bin={event.Bin}
      LoginRec={event.LoginRec}
    />
  ));

  return <div>{eventsList}</div>;
}