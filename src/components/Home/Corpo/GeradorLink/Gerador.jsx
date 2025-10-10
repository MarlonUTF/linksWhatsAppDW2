import { Box } from "@mui/material";
import { useState } from "react";
import FormLink from "./FormLink";
import LinkGerado from "./LinkGerado";

export default function Gerador({telefone, nomeMensagem, estadoMensagem, value}) {
  const [linkGerado, setLinkGerado] = useState(""); // estado no pai

  return (
    <Box className="max-w-2xl mx-auto p-6">
      {/* Passa função para atualizar o link */}
      <FormLink telefone ={telefone} setLinkGerado={setLinkGerado} nomeMensagem ={nomeMensagem} estadoMensagem = {estadoMensagem} value = {value} />
      
      {/* Passa o link como prop */}
      <LinkGerado link={linkGerado} />
    </Box>
  );
}
