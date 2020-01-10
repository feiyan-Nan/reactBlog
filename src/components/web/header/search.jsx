import React, { Component } from 'react'
import { Input, Icon, Row, Col } from 'antd'
import { withRouter } from 'react-router-dom'

@withRouter
class SearchButton extends Component {
  state = { keyword: '', display: 'none'}

  handleChange = e => {
    console.log(this.refs.haha, 147258)
    this.setState({ keyword: e.target.value })
    e.target.value ? this.setState({display: 'inline-block'}) : this.handleSearchClose()
  }

  handleSubmit = () => {
    const keyword = this.state.keyword
    if (keyword) this.props.history.push(`/?page=1&keyword=${keyword}`)
  }

  handlePressEnter = e => {
    e.target.blur()
  }

  handleSearchClose = () => {
    this.setState({ keyword: '', display: 'none'})
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    return (
      <Row id="search-box">
        <Col>
          <Icon type="search" onClick={this.handleSubmit} className="anticon pointer" />
          <Input
            type="text"
            value={this.state.keyword}
            onChange={this.handleChange}
            // onBlur={this.handleSubmit}
            // onPressEnter={this.handlePressEnter}
            // allowClear="true"
            onPressEnter={this.handleSubmit}
            className="header-search"
            placeholder="搜索文章"
            style={{ width: '200px' }}
          />
          <Icon onClick={this.handleSearchClose} className="pointer" type="close-circle" style={{display: this.state.display}} />
        </Col>
      </Row>
    )
  }
}

export default SearchButton
