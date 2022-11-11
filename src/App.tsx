import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconPack, library } from '@fortawesome/fontawesome-svg-core'

import Button, { ButtonSize, ButtonType } from './components/Button/button';
import MenuItem from './components/Menu/menuItem';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';

library.add(fas as IconPack)
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Icon icon="coffee" theme="danger" size="10x"></Icon> */}
        <Menu defaultIndex={'0'} onSelect={(index: string) => console.log(index)} defaultOpenSubMenu={['2']}>
          <MenuItem>
            cool link1
          </MenuItem>
          <MenuItem disabled>
            cool link2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link3
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
