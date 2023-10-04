import {} from 'react';
import { InputForm, Button } from '../../components';

function Login() {
    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-semibold text-2xl mb-3">Đăng nhập</h3>
            <div className="w-full flex flex-col gap-5 ">
                <InputForm label={'Số điện thoại'} />
                <InputForm label={'Mật khẩu'} />
                <Button text="Đăng nhập" bgColor="bg-secondary1" textColor="text-white" fullWidth />
            </div>
            <div className="flex items-center justify-between mt-7">
                <small className="text-blue-500 hover:text-red-500 cursor-pointer hover:underline">
                    Quên mật khẩu!
                </small>
                <small className="text-blue-500 hover:text-red-500 cursor-pointer hover:underline">
                    Tạo tài khoản mới!
                </small>
            </div>
        </div>
    );
}

export default Login;
