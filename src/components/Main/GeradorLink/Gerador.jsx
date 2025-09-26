import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { ContentCopy, WhatsApp, Check } from "@mui/icons-material";

export default function Gerador() {

  return (
    <Box className="max-w-2xl mx-auto p-6">
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

      <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
        <Typography
          variant="h6"
          gutterBottom
          className="font-semibold text-gray-700"
        >
          Link gerado:
        </Typography>
        <Box className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
          <Typography className="flex-1 text-blue-600 font-mono">
            https://wa.me/5544912341234
          </Typography>
          <IconButton
            className="bg-white hover:bg-gray-50"
          >
            {/* {copied ? <Check className="text-green-500" /> : <ContentCopy />} */}
          </IconButton>
        </Box>

        <Button
          variant="contained"
          size="large"
          fullWidth
          startIcon={<WhatsApp />}
          sx={{
            mt: 3,
            py: 1.5,
            borderRadius: 2,
            backgroundColor: "#25d366",
            "&:hover": {
              backgroundColor: "#128c7e",
            },
          }}
        >
          Abrir WhatsApp
        </Button>
      </Paper>
    </Box>
  );
}
