import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconPack, library } from '@fortawesome/fontawesome-svg-core'

import Button, { ButtonSize, ButtonType } from './components/Button/button';
import MenuItem from './components/Menu/menuItem';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import { Input } from './components/Input/input';
library.add(fas as IconPack)
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Input></Input>
      </header>
    </div>
  );
}

export default App;
