import React from 'react'
import { Icon, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import logo from '@/assets/timg.png'

// import DropdownMenu from './nav'

const HeaderLeft = ({ navList }) => {
  const aa = (
    <Menu className="header-nav">
      {navList.map(nav => (
        <Menu.Item key={nav.link}>
          <Link to={nav.link}>
            {nav.icon && <Icon type={nav.icon} style={{ marginRight: 15 }} />}
            <span className="nav-text">{nav.title}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <div className="header-left">
      <img className="blog-logo" src={logo} alt="小破孩"/>
      <span className="blog-name">小破孩的博客</span>
      <Dropdown overlayClassName="header-dropdown" trigger={['click']} overlay={aa}>
        {/* <Dropdown overlayClassName="header-dropdown" trigger={['click']} overlay={<DropdownMenu navList={navList} />}> */}
        <Icon type="menu-o" className="nav-phone-icon" />
      </Dropdown>
    </div>
  )
}

export default HeaderLeft
