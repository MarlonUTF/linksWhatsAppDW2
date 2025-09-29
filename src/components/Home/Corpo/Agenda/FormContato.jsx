import { 
  Paper, 
  Typography, 
  TextField, 
  Button,
  Box,
} from "@mui/material";

export default function FormContato() {
  return (
    <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
      <Typography
        variant="h6"
        gutterBottom
        className="font-semibold text-gray-700"
      >
        Salvar na Agenda
      </Typography>
      <Box className="flex gap-4 mb-4">
        <TextField
          label="Nome"
          variant="outlined"
          placeholder="Nome do contato"
          fullWidth
          InputProps={{
            sx: { borderRadius: 2 },
          }}
        />
        <TextField
          label="Número"
          variant="outlined"
          placeholder="Número"
          fullWidth
          InputProps={{
            sx: { borderRadius: 2 },
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          borderRadius: 2,
          backgroundColor: "#3b82f6",
          "&:hover": {
            backgroundColor: "#2563eb",
          },
        }}
      >
        Adicionar Contato
      </Button>
    </Paper>
  );
}
