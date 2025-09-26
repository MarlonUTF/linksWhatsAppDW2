import Button from '@mui/material/Button';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h2>
                <Button
                    variant="contained"
                    startIcon={<FcGoogle />}
                    className="!bg-white !text-gray-800 !shadow-md !rounded-lg !py-2 !px-4 !w-full hover:!bg-gray-100 transition duration-300"
                >
                    Entrar com Google
                </Button>
            </div>
        </div>
    );
}
