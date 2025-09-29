import { TextField, Typography, Paper, Button } from "@mui/material";

export default function FormLink() {
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
  );
}
