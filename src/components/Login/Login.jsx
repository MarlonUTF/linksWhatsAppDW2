import { FcGoogle } from 'react-icons/fc';
import {
    Paper,
    Typography,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box,
    IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import { Edit, Delete, Message } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import Swal from 'sweetalert2';

export default function Login() {
    const navigate = useNavigate();
     <Routes>
      <Route path="/linksWhatsAppDW2/" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <Paper elevation={2} sx={{ p: 3, mb: 1, borderRadius: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6" gutterBottom className="font-semibold text-gray-700 flex justify-center align-center">
                    Login
                </Typography>
                <Box className="flex gap-4 mb-4">
                    <TextField
                        label="Nome"
                        variant="outlined"
                        //   value={nome} onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome do contato"
                        fullWidth
                        InputProps={{
                            sx: { borderRadius: 2 }
                        }}
                    />
                    <TextField
                        label="Senha"
                        variant="outlined"
                        //   value={numero}
                        //   onChange={aplicarMascaraTelefone}
                        placeholder="(00) 0 0000 0000"
                        fullWidth
                        InputProps={{
                            sx: { borderRadius: 2 }
                        }}
                    />
                </Box>

                <Button
                    variant="contained"
                    className="!bg-white !text-gray-800 !shadow-md !rounded-lg !py-2 !px-4 !w-full hover:!bg-gray-100 transition duration-300"
                    onClick={() =>navigate("/linksWhatsAppDW2/")}
                >
                    Acessar
                </Button>

                <Button
                    variant="contained"
                    className="!bg-white !text-gray-800 !shadow-md !rounded-lg !py-2 !px-4 !w-full hover:!bg-gray-100 transition duration-300"
                // onClick={() => criarContato(nome, numero)}
                >
                    Cadastrar-se
                </Button>

                <Typography variant="h6" gutterBottom className="font-semibold text-gray-700 justify-center align-center flex">
                    ou
                </Typography>

                <Button
                    variant="contained"
                    startIcon={<FcGoogle />}
                    className="!bg-white !text-gray-800 !shadow-md !rounded-lg !py-2 !px-4 !w-full hover:!bg-gray-100 transition duration-300"
                >
                    Entrar com Google
                </Button>
            </Paper>

        </div>
    );
}
