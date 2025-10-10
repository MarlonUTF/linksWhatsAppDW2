import { TextField, Typography, Paper, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function FormLink({ setLinkGerado, telefone, nomeMensagem, estadoMensagem, value}) {
  const [telefoneInput, setTelefoneInput] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    setTelefoneInput(telefone || "");
  }, [telefone]);

  const aplicarMascaraTelefone = (evento) => {
    let valor = evento.target.value.replace(/\D/g, "");
    valor = valor.slice(0, 11);

    if (valor.length <= 10) {
      valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2 $3");
    } else {
      valor = valor.replace(/(\d{2})(\d{1})(\d{4})(\d{0,4})/, "($1) $2 $3 $4");
    }

    valor = valor.trim();
    setTelefoneInput(valor);
  };

  function prepararMensagem() {
    if (!telefoneInput) {
      alert("Por favor, insira um número de telefone.");
      return;
    }

    const numeroLimpo = telefoneInput.replace(/\D/g, "");
    if (numeroLimpo.length < 10) {
      alert("Número de telefone inválido.");
      return;
    }

    const mensagemCodificada = encodeURIComponent(mensagem);
    const link = `https://wa.me/55${numeroLimpo}${
      mensagem ? `?text=${mensagemCodificada}` : ""
    }`;

    setLinkGerado(link); // atualiza no pai
  }

  function limpaDados(value){
    if(value == 0){
      estadoMensagem = false;
      nomeMensagem = "";
    }
  }

  return (
    <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
       {estadoMensagem && 
       <Typography variant="h6" gutterBottom>
        Contato {nomeMensagem}
      </Typography>
      }
      <Typography variant="h6" gutterBottom>
        Número do WhatsApp
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={telefoneInput}
        onChange={aplicarMascaraTelefone}
        placeholder="(00) 00000-0000"
        sx={{ mb: 3 }}
      />

      <Typography variant="h6" gutterBottom>
        Mensagem 
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        multiline
        rows={3}
        value={mensagem}
        onChange={(evento) => setMensagem(evento.target.value)}
        placeholder="Digite sua mensagem aqui..."
      />

      <Button
        onClick={prepararMensagem}
        variant="contained"
        size="large"
        fullWidth
        sx={{
          mt: 3,
          py: 1.5,
          borderRadius: 2,
          backgroundColor: "#10b981",
          "&:hover": { backgroundColor: "#059669" },
        }}
      >
        Preparar Mensagem
      </Button>
    </Paper>
  );
}
