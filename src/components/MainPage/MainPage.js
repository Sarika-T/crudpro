
import { useState } from 'react';
import { MenuIcon, ProfileIcon } from '../../assets/icon';
import TemporaryDrawer from '../common/Drawer';
import './MainPage.css';
import Tasks from './Tasks';
import Home from './Home';
import About from './About';

const isMobile = () => window.innerWidth <= 768;

export default function MainPage() {
    const [open, setOpen] = useState(!isMobile());
    const [page, setPage] = useState('Home');
    const [activePage, setActivePage] = useState('Home');
    
    const handleOpen = () => {
        setOpen(true);
    };

    const renderPageContent = () => {
        switch (page) {
            case 'Home':
                return <Home />;
            case 'Tasks':
                return <Tasks />;
            case 'About':
                return <About />;
            default:
                return null;
        }
    };

    const containerStyles = {
        width: open && !isMobile() ? 'calc(100% - 250px)' : '100%',
        right: open && !isMobile() ? '0' : 'unset',
        position: open && !isMobile() ? 'absolute' : 'static',
    };

    return(
        <div className="mainpage">
            <div className={`overlay ${open ? 'visible' : ''}`}></div>
            <div className="mainpage-content-container" style={containerStyles}>
                <div className="mainpage-content header">
                    <span className='mainpage-content icon' onClick={handleOpen}>
                        <MenuIcon />
                    </span>
                    <TemporaryDrawer open={open} setOpen={setOpen} setPage={setPage} activePage={activePage} setActivePage={setActivePage} />
                    <span className="mainpage-content header-text">TaskMate</span>
                    <span className='mainpage-conent icon'><ProfileIcon /></span>
                </div>
                <div className="mainpage-content-body">{renderPageContent()}</div>
            </div>
        </div>
    )
}