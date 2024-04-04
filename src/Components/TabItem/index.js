import {Component} from 'react'
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const tabStyle = isActive ? 'active' : ''
  return (
    <li className="no-dot">
      <button className={`${tabStyle}tab-style`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
