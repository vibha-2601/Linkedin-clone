import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Tesla hits new hish", "Cars and auto - 300 readers")}
      {newsArticle("Is Redux too good!", "Code - 123 readers")}
      {newsArticle("Tesla hits new hish", "Cars and auto - 300 readers")}
      {newsArticle("Tesla hits new hish", "Cars and auto - 300 readers")}

    </div>
  )
}

export default Widgets

