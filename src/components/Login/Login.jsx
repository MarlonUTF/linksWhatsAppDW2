import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../../supabaseCliente';
import { Paper, Typography, TextField, Button, Box } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // Verifica se o usuário já está logado ao abrir a página
    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) navigate("/home");
        };
        checkSession();
    }, [navigate]);

    // Login com email e senha
    const handleSignIn = async () => {
        if (!email || !senha) {
            Swal.fire("Erro", "Preencha todos os campos", "error");
            return;
        }


        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password: senha
        });

        if (error.message.includes("invalid_credentials") && emailRegistradoViaGoogle) {
            Swal.fire("Erro", "Este email foi cadastrado via Google. Use login com Google.", "error");
        }

        if (error) {
            Swal.fire("Erro", error.message, "error");
        } else {
            Swal.fire("Sucesso", "Login realizado!", "success");
            navigate("/login");
        }



    };

    // Login com Google
    const handleSignInWithGoogle = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
            });

            if (error) {
                // Caso o email já exista no Supabase (senha cadastrada)
                if (
                    error.message.includes("already registered") ||
                    error.message.includes("user already exists")
                ) {
                    Swal.fire({
                        icon: "error",
                        title: "Email já cadastrado",
                        text: "Este email já está registrado com outro método de login. Tente entrar com sua senha ou redefina sua senha.",
                    });
                } else {
                    // Outros erros do Supabase
                    Swal.fire({
                        icon: "error",
                        title: "Erro ao entrar com Google",
                        text: error.message,
                    });
                }
            } else {
                // Sucesso: o Supabase redireciona automaticamente
                Swal.fire({
                    icon: "success",
                    title: "Acessando com Google",
                    text: "Você será redirecionado...",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Erro inesperado",
                text: err.message,
            });
        }
    };





    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <Paper elevation={2} sx={{ p: 3, mb: 1, borderRadius: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6" gutterBottom className="font-semibold text-gray-700 flex justify-center align-center">
                    Login
                </Typography>

                <Box className="flex flex-col gap-4 mb-4">
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        fullWidth
                        InputProps={{ sx: { borderRadius: 2 } }}
                    />

                    <TextField
                        label="Senha"
                        variant="outlined"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        fullWidth
                        InputProps={{ sx: { borderRadius: 2 } }}
                    />
                </Box>

                <Button
                    variant="contained"
                    className="!bg-white !text-gray-800 !shadow-md !rounded-lg !py-2 !px-4 !w-full hover:!bg-gray-100 transition duration-300"
                    onClick={handleSignIn}
                >
                    Acessar
                </Button>

                <Typography variant="h6" gutterBottom className="font-semibold text-gray-700 justify-center align-center flex">
                    ou
                </Typography>

                <Button
                    variant="contained"
                    startIcon={<FcGoogle />}
                    className="!bg-white !text-gray-800 !shadow-md !rounded-lg !py-2 !px-4 !w-full hover:!bg-gray-100 transition duration-300"
                    onClick={handleSignInWithGoogle}
                >
                    Entrar com Google
                </Button>

                <Button
                    variant="text"
                    className="mt-2 text-blue-500 hover:text-blue-700"
                    onClick={() => navigate("/cadastro")}
                >
                    Cadastrar-se
                </Button>
            </Paper>
        </div>
    );
}
