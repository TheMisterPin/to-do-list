import React, { useState } from 'react';
import '../App.css';
import headerImage from '../media/Header.png';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <AntHeader className="header">
              <img src={headerImage} alt="Header" style={{ maxWidth: isMobileMenuOpen ? '50%' : '100%' }} />
                    </AntHeader>
    );
}

export default Header;
