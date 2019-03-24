import React from 'react'
import styled from 'styled-components'
import { FiMoreHorizontal } from 'react-icons/fi'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'

const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export default ({ actions }) => (
  <Menu>
    <UncontrolledDropdown inNavbar>
      <DropdownToggle color="link">
        <FiMoreHorizontal size={24} />
      </DropdownToggle>
      <DropdownMenu right>
      {actions.map((action, index) => (
        <DropdownItem key={index} onClick={action.callback}>
          {action.name}
        </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  </Menu>
)
