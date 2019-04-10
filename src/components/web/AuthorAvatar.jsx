import React from 'react'
import avatar from '@/assets/my.jpg'
import { Avatar } from 'antd'

const AuthAvatar = ({ size = 'default' }) => {
  return <Avatar src={avatar} size={size} />
}

export default AuthAvatar
