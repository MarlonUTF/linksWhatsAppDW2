import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Typography, TextField, Button, Box } from "@mui/material";
import Swal from "sweetalert2";
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)
import { FcGoogle } from "react-icons/fc";

export default function Cadastro() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const validarSenha = (senha) => {
        if (senha.length < 4 || senha.length > 6)
            return "A senha deve ter entre 4 e 6 caracteres.";
        if (/^(\d)\1+$/.test(senha) || /^([a-zA-Z])\1+$/.test(senha))
            return "Senha muito fraca. Evite caracteres repetidos.";
        const sequencias = ["1234","2345","3456","4567","5678","6789","9876","8765","7654","6543","5432","4321"];
        if (sequencias.includes(senha)) return "Senha muito fraca. Evite sequências numéricas.";
        return null;
    };

    const handleCadastro = async () => {
        if (!email || !senha || !confirmaSenha) {
            Swal.fire("Erro", "Preencha todos os campos", "error");
            return;
        }

        if (senha !== confirmaSenha) {
            Swal.fire("Erro", "As senhas não coincidem", "error");
            return;
        }

        const erroSenha = validarSenha(senha);
        if (erroSenha) {
            Swal.fire("Erro", erroSenha, "error");
            return;
        }

        // Checa email duplicado na tabela users (paralela ao auth)
        const { data: existingUser } = await supabase
            .from("users")
            .select("email")
            .eq("email", email)
            .single();

        if (existingUser) {
            Swal.fire("Erro", "Este email já existe. Tente fazer login ou redefina sua senha.", "error");
            return;
        }

        // Cria usuário no Supabase Auth
        const { data, error } = await supabase.auth.signUp({ email, password: senha });

        if (error) {
            Swal.fire("Erro", error.message, "error");
        } else {
            // Inserir registro na tabela users (opcional)
            await supabase.from("users").insert([{ email }]);

            Swal.fire({
                icon: "success",
                title: "Cadastro realizado!",
                text: "Você será redirecionado para a página inicial",
                timer: 1500,
                showConfirmButton: false,
            });

            navigate("/home");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <Paper elevation={2} sx={{ p: 3, mb: 1, borderRadius: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6" gutterBottom className="font-semibold text-gray-700 flex justify-center align-center">
                    Cadastro
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

                    <TextField
                        label="Confirme a senha"
                        variant="outlined"
                        type="password"
                        value={confirmaSenha}
                        onChange={(e) => setConfirmaSenha(e.target.value)}
                        placeholder="Digite a senha novamente"
                        fullWidth
                        InputProps={{ sx: { borderRadius: 2 } }}
                    />
                </Box>

                <Button
                    variant="contained"
                    className="!bg-white !text-gray-800 !shadow-md !rounded-lg !py-2 !px-4 !w-full hover:!bg-gray-100 transition duration-300"
                    onClick={handleCadastro}
                >
                    Cadastrar-se
                </Button>

                <Button
                    variant="text"
                    className="mt-2 text-blue-500 hover:text-blue-700"
                    onClick={() => navigate("/login")}
                >
                    Já possui conta? Faça login
                </Button>
               
            </Paper>
        </div>
    );
}
