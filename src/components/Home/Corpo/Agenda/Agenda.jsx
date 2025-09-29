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

export default function Agenda() {
  const contatos = [
    { nome: "Joao", numero: "(44) 91234-1234" }
  ];

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
            placeholder="Nome do contato"
            fullWidth
            InputProps={{
              sx: { borderRadius: 2 }
            }}
          />
          <TextField
            label="Número"
            variant="outlined"
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
                  <TableCell className="font-medium">{contato.nome}</TableCell>
                  <TableCell className="text-gray-600">{contato.numero}</TableCell>
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