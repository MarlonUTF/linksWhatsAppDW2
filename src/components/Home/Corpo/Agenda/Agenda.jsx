import { 
  Box,
} from "@mui/material";
import FormContato from "./FormContato";
import ListaContato from "./ListaContato"

export default function Agenda() {
  const contatos = [
    { nome: "Joao", numero: "(44) 91234-1234" }
  ];

  return (
    <Box className="max-w-4xl mx-auto p-6">
      <FormContato />
      <ListaContato contatos={contatos}/>
    </Box>
  );
}