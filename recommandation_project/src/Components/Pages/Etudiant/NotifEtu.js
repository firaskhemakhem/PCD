import React, { useEffect, useState } from "react";

const NotifEtu = (props) => {
    const { url } = props;
    const [nomSuj, setNomSuj] = useState([]);
    const [data, setData] = useState([]);
    const [exist, setExist] = useState(false);

    const verifExist = (ele) => {
        for (let i = 0; i < data.length; i++) {
            if (ele.id_Sujet === data[i].id_Sujet && ele.Student === data[i].Student) {
                setExist(true);
                //console.log("d5alna f verif exist true");
            }
            else {
                setExist(false);
                //console.log("d5alna f verif exist false")
            }
        }
    }
    const getNameSuj = (idSuj) => {
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/${idSuj}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then((response) => {
                setNomSuj(nomSuj => [...nomSuj, response.Titre]);
                console.log("d5alna f getNameSuj")
                /*console.log(response)
                console.log(response.length);
                for (let i = 0; i < response.length; i++) {
                    setNomSuj(nomSuj => [...nomSuj, result[i].Titre]);
                }
                console.log("d5alna f nomSuj")
                console.log(nomSuj);*/

            })
    }
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                for (let i = 0; i < result.length; i++) {
                    if (result[i].student === url && result[i].Att === true) {
                        //console.log(result[i])
                        verifExist(result[i]);
                        if (!exist) {
                            setData(data => [...data, result[i]]);
                            //getNameSuj(result[i].id_sujet)
                        }
                        //console.log(data);
                        console.log(nomSuj)
                    }
                }
            })
    }, []);
    const Lines = data.map((notif) => 
            (
                <th key={notif.id_sujet}>
                    <tr>
                        Votre candidature a été confirmer par l'Entreprise {notif.recruteur}. Consultez votre mail pour plus d'information.
                    </tr>
                </th>
            )
    );
    return (
        <div>
            {Lines}
        </div>
    )
}

export default NotifEtu;