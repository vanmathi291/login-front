import './Popup.css'
import React from 'react'

export default function Popup({msg,resetForm}) {
  
    return (
      <div className='Popup'>
        <div className='Popup-content'>
            <span className='popup-msg'>{msg}</span>
            <span className='close' onClick={resetForm}>X</span>
        </div>
      </div>
    )
  }


