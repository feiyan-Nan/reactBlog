import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

// @withRouter
class Nav extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired,
    mode: PropTypes.string
  }

  // 这个放在this.props作为组件的一个属性
  static defaultProps = {
    mode: 'horizontal'
  }

  render() {
    const { navList, mode } = this.props
    console.log(this.props, 123456)
    return (
      <Menu mode={mode} selectedKeys={[this.props.location.pathname]} className="header-nav">
        {navList.map(nav => (
          <Menu.Item key={nav.link}>
            <Link to={nav.link}>
              {nav.icon && <Icon type={nav.icon} />}
              <span className="nav-text">{nav.title}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    )
  }
}

export default withRouter(Nav)
