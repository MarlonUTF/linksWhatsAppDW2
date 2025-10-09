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
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pxahbijwhfmuwxcpicih.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4YWhiaWp3aGZtdXd4Y3BpY2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4OTUyNjYsImV4cCI6MjA3NDQ3MTI2Nn0.MyJouLnH8fnW5PDsiKXTK_HYhsHcyD0qzMCXf3kMQ0w'

export const supabase = createClient(supabaseUrl, supabaseKey)


export default function Agenda() {
  const [contatos, setContatos] = useState([])
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
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
      (contato) => contato.nome === nome && contato.telefone === numero
    )
  }
  // Criar contato
  async function criarContato(nome, numero) {
    if (contatoExiste(nome, numero)) { console.log("contato já existente") } else {
      const { error: insertError } = await supabase
        .from('contatos')
        .insert([
          {
            name: nome,
            phone: numero,
          }
        ])

      if (insertError) {
        console.error('Erro ao criar contatos:', error.message)
        return
      }

      console.log('Contato criado com sucesso!')
      return true
    }

    // // Atualizar contato

    // async function atualizarContato(contactId) {
    //   const { error: updateError } = await supabase
    //     .from('contacts')
    //     .update({ phone: '88888-8888' })
    //     .eq('id', contactId)

    //   if (error) {
    //     console.error('Erro ao atualizar contato:', error.message)
    //     return false
    //   }

    //   console.log('Contato atualizado com sucesso!')
    //   return true
    // }

    // // Deletar contato
    // async function deletarContato(contactId) {
    //   const { error } = await supabase
    //     .from('contacts')
    //     .delete()
    //     .eq('id', contactId)

    //   if (error) {
    //     console.error('Erro ao deletar contato:', error.message)
    //     return false
    //   }

    //   console.log('Contato deletado com sucesso!')
    //   return true
    // }



    return (

      <Box className="max-w-4xl mx-auto p-6">
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
                      <IconButton size="small" className="text-green-500">
                        <Message />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <Box className="flex gap-1">
                        <IconButton size="small" className="text-blue-500">
                          <Edit />
                        </IconButton>
                        <IconButton size="small" className="text-red-500">
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
}