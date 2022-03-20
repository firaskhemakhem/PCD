import React, { useState } from 'react'
import { Popup, DatePicker } from 'react-date-time-picker-popup'
import 'react-date-time-picker-popup/dist/index.css'

const AgendaPartagee = () => {
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState(new Date());
  

  return (<div>
       <button   onClick={() => setVisible(true)}
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 4, mb:2 }}
                    >
                      Sélectionner
                    </button>
    
    <Popup visible={visible} setVisible={setVisible}>
      <DatePicker lang="fr" selectedDay={day} setSelectedDay={setDay} timeSelector={true}/>
    </Popup>
  </div>);
}

export default AgendaPartagee