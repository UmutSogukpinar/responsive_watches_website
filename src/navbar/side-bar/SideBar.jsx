import React from 'react'

const SideBar = ({isClicked}) => {
  return (
    <div id="side-bar" className={isClicked ? 'open' : ''}>
          <ul id="side-bar-list">
            <li className="side-header">
                <h3>HOME</h3>
            </li>
            <li className="side-header">
                <h3>ABOUT</h3>
            </li>
            <li className="side-header">
                <h3>CATEGORY</h3>
            </li>
            <li className="side-header">
                <h3>ITEMS</h3>
            </li>
          </ul>
    </div>
  )
}

export default SideBar