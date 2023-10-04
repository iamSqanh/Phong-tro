import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { path } from '../../ultils/constant';
import { Button } from '../../components';
import icons from '../../ultils/icons';

const { AiOutlinePlusCircle } = icons;

function Header() {
    const navigate = useNavigate();
    const goLogin = useCallback(() => {
        navigate(path.LOGIN);
    }, []);

    return (
        <div className="w-1440">
            <div className="w-full flex items-center justify-between">
                <img
                    src="https://th.bing.com/th/id/R.68f8e9ca937cca27da8128b8ae6d3fa2?rik=KkIva1JQIDXAgQ&pid=ImgRaw&r=0"
                    alt=""
                    className="w-[270px] h-[70px] object-contain"
                />
                <div className="flex items-center gap-3">
                    <Button text="Đăng ký" textColor="text-white" bgColor="bg-secondary1" />
                    <Button text="Đăng nhập" textColor="text-white" bgColor="bg-secondary1" onClick={goLogin} />
                    <Button
                        text="Đăng tin mới"
                        textColor="text-white"
                        bgColor="bg-secondary2"
                        IconAfter={AiOutlinePlusCircle}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
