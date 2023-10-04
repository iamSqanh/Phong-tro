import {} from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

function Home() {
    return (
        <div className="w-1440 h-full m-auto">
            <Header />
            <div className="w-full flex flex-col items-center justify-start">{<Outlet />}</div>
        </div>
    );
}

export default Home;
