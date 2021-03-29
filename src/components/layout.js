import React from 'react'
import '../assets/scss/main.scss'

import Sidebar from './Sidebar'

const Template = ({ children }) => (
  <div>
    <Sidebar />
    {children}
  </div>
)

export default Template
