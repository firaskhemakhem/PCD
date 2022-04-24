import React, { useEffect, useState } from "react";
import TableBody from '@mui/material/TableBody';
import Divider from '@mui/material/Divider';
const NotifRec = (props) => {
    const { url } = props;
    //const [data, setData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [exist, setExist]= useState(false);


    useEffect(() => {
        fetch(`http://127.0.0.1:8000/PcdApp/notifRec/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then((result) => {
                //setData(result);
                for (let i = 0; i < result.length; i++) {
                    if (result[i].Recruteur === url) {
                        verifExist(result[i]);
                        if (!exist){
                        setFinalData(finalData=>[...finalData,result[i]]);
                        //console.log('hahah')
                        } 
                    }
                    //console.log(finalData);
                }
                //console.log(url)
                

            })
            /*.then(()=>{
               
                for (let i = 0; i < data.length; i++) {
                    if (data[i].Recruteur === url) {
                        verifExist(data[i]);
                        if (!exist){
                        setFinalData(finalData=>[...finalData,data[i]]);
                        console.log('hahah')
                        } 
                    }
                    console.log(finalData);
                }
                console.log(url)
            })*/
    }, []);

    const verifExist=(ele)=>{
        for (let i = 0; i < finalData.length; i++){
            if (ele.Recruteur === finalData[i].Recruteur && ele.Sujet === finalData[i].Sujet && ele.Student === finalData[i].Student){
                setExist(true);
            }
            else {
                setExist(false);
            }
        }
    }
    /*const selectData = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].Recruteur === url) {
                console.log(data[i]);
                //setFinalData({...finalData, "rec": data[i]});
                //console.log(finalData);
            }
        }
    }*/
    const Lines = finalData.map((notif,i) => (
        <TableBody>
        <th key={i}>
            
            L'Etudiant(e) {notif.Nom} a postuler dans un sujet proposez par vous {notif.Time}. Consultez votre mail pour plus d'information.
            <br/>
            <br/>
            <Divider/>
            <br/>
            </th>
            </TableBody>
    ));

    return (
        <div>
            
                    {Lines}
        </div>
    )
}

export default NotifRec;