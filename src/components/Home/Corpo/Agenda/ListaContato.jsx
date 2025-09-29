import { 
  Paper, 
  Typography,
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

export default function ListaContato({contatos}) {
  return (
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
                <TableCell className="text-gray-600">
                  {contato.numero}
                </TableCell>
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
  );
}
