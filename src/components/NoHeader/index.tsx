import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/index';
import './noheader.css';

export function NoHeader() {
    return (
        <div className="page-container">
        <Outlet />
        <Footer/>
        </div>
    );
}