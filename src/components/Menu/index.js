import React from 'react';
import { FaHome, FaList } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';

import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { SideBar, Item } from './styles';

function Menu() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <SideBar>
      <ul>
        <Item to="/">
          <div>
            <FaHome size="1.5rem" />
            <span>Home</span>
          </div>
        </Item>
        <Item to="/order">
          <div>
            <FaList size="1.5rem" />
            <span>My Orders</span>
          </div>
        </Item>
        <Item to="/" onClick={handleSignOut}>
          <div>
            <MdExitToApp size="1.5rem" />
            SignOut
          </div>
        </Item>
      </ul>
    </SideBar>
  );
}

export default Menu;
