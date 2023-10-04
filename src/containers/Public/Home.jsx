import {} from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';

function Home() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <Header />
            <Navigation />
            <div className="w-1440 flex flex-col items-center justify-start">{<Outlet />}</div>
        </div>
    );
}

export default Home;
