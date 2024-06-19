import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    key:"home",
    label:<Link to="/">All Superheroes</Link>
  },
  {
    key:"marvel",
    label:<Link to="/marvel">Marvel Superheroes</Link>
  },
  {
    key:"dc",
    label:<Link to="/dc">DC Superheroes</Link>
  },
  {
    key:"search",
    label:<Link to="/search">Search</Link>
  },
]

const NavBarComponent = () => {
  
  return (
    <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
    </Header>
  )
}

export default NavBarComponent