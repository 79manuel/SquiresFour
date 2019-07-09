import React from 'react';
import MenuList from '../Menu/MenuList';
import MenuDetails from '../Menu/MenuDetails';
import './Menu.sass';

class Menu extends React.Component {
    render() {
        return (
            <main>
                <MenuList />
                <MenuDetails />
            </main>
        );
    }
}

export default Menu;