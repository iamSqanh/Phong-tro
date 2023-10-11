import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as actions from '../../store/actions'
import {useDispatch} from 'react-redux'

import { apiRegister } from '../../servives/auth';
import { InputForm, Button } from '../../components';

function Login() {
    const location = useLocation();
    const dispatch = useDispatch();

    const [isRegister, setIsRegister] = useState(location.state?.flag);
    const [payload, setPayload] = useState({
        phone: '',
        password: '',
        name: '',
    });

    useEffect(() => {
        setIsRegister(location.state?.flag);
    }, [location.state?.flag]);

    const handleSubmit = async () => {
        // const response = await apiRegister(payload);
        console.log(payload);
        dispatch(actions.register(payload))
    };

    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-semibold text-2xl mb-3">{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
            <div className="w-full flex flex-col gap-5 ">
                {isRegister && <InputForm label={'Họ tên'} value={payload.name} setValue={setPayload} type={'name'}/>}
                <InputForm label={'Số điện thoại'} value={payload.phone} setValue={setPayload} type={'phone'}/>
                <InputForm label={'Mật khẩu'} value={payload.password} setValue={setPayload} type={'password'}/>
                <Button
                    text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
                    bgColor="bg-secondary1"
                    textColor="text-white"
                    fullWidth
                    onClick={handleSubmit}
                />
            </div>
            <div className="flex items-center justify-between mt-7">
                {isRegister ? (
                    <small>
                        Bạn đã có tài khoản{' '}
                        <span
                            className="text-blue-500 hover:underline cursor-pointer"
                            onClick={() => setIsRegister(false)}
                        >
                            Đăng nhập ngay
                        </span>
                    </small>
                ) : (
                    <>
                        <small className="text-blue-500 hover:text-red-500 cursor-pointer hover:underline">
                            Quên mật khẩu!
                        </small>
                        <small
                            onClick={() => setIsRegister(true)}
                            className="text-blue-500 hover:text-red-500 cursor-pointer hover:underline"
                        >
                            Tạo tài khoản mới!
                        </small>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
