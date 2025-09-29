import { useState } from "react";
import { TextField, Typography, Paper, Button } from "@mui/material";

export default function FormularioLink() {
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const aplicarMascaraTelefone = (evento) => {
    let valor = evento.target.value.replace(/\D/g, ""); // Remove tudo que não é número
    
    // Limita a 11 dígitos
    valor = valor.slice(0, 11);
    
    // Aplica a máscara
    if (valor.length <= 10) {
      valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
    
    setTelefone(valor);
  };

  return (
    <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
      <Typography
        variant="h6"
        gutterBottom
        className="font-semibold text-gray-700"
      >
        Número do WhatsApp
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={telefone}
        onChange={aplicarMascaraTelefone}
        placeholder="(00) 00000-0000"
        sx={{ mb: 3 }}
        InputProps={{
          sx: { borderRadius: 2 },
        }}
      />
      
      <Typography
        variant="h6"
        gutterBottom
        className="font-semibold text-gray-700"
      >
        Mensagem (opcional)
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        multiline
        rows={3}
        value={mensagem}
        onChange={(evento) => setMensagem(evento.target.value)}
        placeholder="Digite sua mensagem aqui..."
        InputProps={{
          sx: { borderRadius: 2 },
        }}
      />
      
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{
          mt: 3,
          py: 1.5,
          borderRadius: 2,
          backgroundColor: "#10b981",
          "&:hover": {
            backgroundColor: "#059669",
          },
        }}
      >
        Preparar Mensagem
      </Button>
    </Paper>
  );
}