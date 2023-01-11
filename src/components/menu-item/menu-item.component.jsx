import React from 'react'

import withRouter from '../../withrouter';

import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, history, size, linkUrl, match }) => (

        <div 
            className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="background-image" style={{backgroundImage: `url(${imageUrl}`}}></div>
            <div className="content">
                <h1 className="title">{ title.toUpperCase() }</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )

export default withRouter(MenuItem);