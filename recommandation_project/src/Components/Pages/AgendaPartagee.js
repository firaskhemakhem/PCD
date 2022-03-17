import React, { useState } from 'react'
import { Popup, DatePicker } from 'react-date-time-picker-popup'
import 'react-date-time-picker-popup/dist/index.css'

const AgendaPartagee = () => {
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState(new Date());

  return <div>
    <button onClick={() => setVisible(true)}>Show Popup</button>
    <Popup visible={visible} setVisible={setVisible}>
      <DatePicker lang="fr" selectedDay={day} setSelectedDay={setDay} timeSelector={true} />
    </Popup>
  </div>
}

export default AgendaPartagee;