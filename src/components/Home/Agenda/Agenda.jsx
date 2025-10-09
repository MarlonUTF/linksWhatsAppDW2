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
import { Edit, Delete, Message } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import Swal from 'sweetalert2';


const supabaseUrl = 'https://pxahbijwhfmuwxcpicih.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4YWhiaWp3aGZtdXd4Y3BpY2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4OTUyNjYsImV4cCI6MjA3NDQ3MTI2Nn0.MyJouLnH8fnW5PDsiKXTK_HYhsHcyD0qzMCXf3kMQ0w'

const supabase = createClient(supabaseUrl, supabaseKey)

export default function Agenda({ setValue, setTelefone }) {
  const [contatos, setContatos] = useState([])
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [editar, setEditar] = useState(false)
  const [salvar, setSalvar] = useState(true)
  const [idContato, setidContato] = useState('')
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    animation: true,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });


  // Listar contatos do usuário logado
  async function listarContatos() {
    const { data, error } = await supabase
      .from('contatos')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Erro ao listar contatos:', error.message)
      return
    }

    setContatos(data)
  }

  useEffect(() => {
    listarContatos();
  }, []);

  function contatoExiste(nome, numero) {
    return contatos.some(
      (contato) =>  contato.phone === numero
    )
  }

  async function criarContato(nome, numero) {
    if (contatoExiste(nome, numero)) {
      console.log("contato já existente")
      Swal.fire({
        title: 'Contato já existente',
        text: 'Digite outro número',
        icon: 'error',
        color: '#000000ff',
        confirmButtonColor: '#0ce700ff',
      });
    } else {
      const { error: insertError } = await supabase
        .from('contatos')
        .insert([
          {
            name: nome,
            phone: numero,
          }
        ])

      if (insertError) {
        console.error('Erro ao criar contatos:', insertError.message)
        Swal.fire({
          title: 'Erro ao criar contato',
          icon: 'error',
        });
        return
      }

      
      listarContatos() // Atualiza lista
      setNome('')
      setNumero('')
    }
  }

  async function deletarContato(contactId) {
    const { error } = await supabase
      .from('contatos')
      .delete()
      .eq('id', contactId)
    if (error) {
      console.error('Erro ao deletar contato:', error.message)
      return false
    }
    
    Toast.fire({
      title: "Contato deletado com sucesso!",
      icon: "success",
    });
    listarContatos() // Atualiza lista
    return true
  }

  async function atualizarContato(contactId, nome, numero) {
    const { error } = await supabase
      .from('contatos')
      .update({
        name: nome,
        phone: numero,
      })
      .eq('id', contactId)
    if (error) {
      console.error('Erro ao atualizar contato:', error.message)
      return false
    }
    Toast.fire({
        icon: "success",
        title:"Contato atualizado com sucesso!"
      });
    listarContatos()
    return true
  }

  return (
    <Box className="max-w-4xl mx-auto p-6">
      {salvar && (
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom className="font-semibold text-gray-700">
            Salvar na Agenda
          </Typography>
          <Box className="flex gap-4 mb-4">
            <TextField
              label="Nome"
              variant="outlined"
              value={nome} onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do contato"
              fullWidth
              InputProps={{
                sx: { borderRadius: 2 }
              }}
            />
            <TextField
              label="Numero"
              variant="outlined"
              value={numero} onChange={(e) => setNumero(e.target.value)}
              placeholder="Número"
              fullWidth
              InputProps={{
                sx: { borderRadius: 2 }
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: '#3b82f6',
              '&:hover': {
                backgroundColor: '#2563eb',
              }
            }}
            onClick={() => criarContato(nome, numero)}
          >
            Adicionar Contato
          </Button>
        </Paper>
      )}

      {editar && (
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }} >
          <Typography variant="h6" gutterBottom className="font-semibold text-gray-700">
            Edição de Contato
          </Typography>
          <Box className="flex gap-4 mb-4">
            <TextField
              label="Nome"
              variant="outlined"
              value={nome} onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do contato"
              fullWidth
              InputProps={{
                sx: { borderRadius: 2 }
              }}
            />
            <TextField
              label="Numero"
              variant="outlined"
              value={numero} onChange={(e) => setNumero(e.target.value)}
              placeholder="Número"
              fullWidth
              InputProps={{
                sx: { borderRadius: 2 }
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: '#3b82f6',
              '&:hover': {
                backgroundColor: '#2563eb',
              }
            }}
            onClick={() => {
              atualizarContato(idContato, nome, numero)
              setEditar(false);
              setSalvar(true);
              setNome('');
              setNumero('');
              setidContato('');
            }}
          >
            Editar contato
          </Button>
        </Paper>
      )}

      <Paper elevation={2} sx={{ borderRadius: 2 }}>
        <Box className="p-4 border-b">
          <Typography variant="h6" className="font-semibold text-gray-700">
            Seus Contatos ({contatos.length})
          </Typography>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="bg-gray-50">
                <TableCell className="font-semibold">Nome</TableCell>
                <TableCell className="font-semibold">Número</TableCell>
                <TableCell className="font-semibold">Mensagem</TableCell>
                <TableCell className="font-semibold">Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contatos.map((contato, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{contato.name}</TableCell>
                  <TableCell className="text-gray-600">{contato.phone}</TableCell>
                  <TableCell>
                    <IconButton size="small" className="text-green-500" onClick={() => { setValue(0); setTelefone(contato.phone) }}>
                      <Message />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Box className="flex gap-1">
                      <IconButton
                        size="small"
                        className="text-blue-500"
                        onClick={() => {
                          setEditar(true);
                          setSalvar(false);
                          setNome(contato.name);
                          setNumero(contato.phone);
                          setidContato(contato.id);
                          window.scrollTo({ top: 0, behavior: "smooth" }); // Volta ao topo suavemente
                        }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton size="small" className="text-red-500" onClick={() => deletarContato(contato.id)}>
                        <Delete />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

    </Box>

  );
}
