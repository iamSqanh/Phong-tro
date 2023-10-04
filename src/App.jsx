import { Route, Routes } from 'react-router-dom';
import { path } from './ultils/constant';
import { Login, Home } from './containers/Public';

function App() {
    return (
        <div className="min-h-screen w-screen bg-primary">
            <Routes>
                <Route path={path.HOME} element={<Home />}>
                    <Route path={path.LOGIN} element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
