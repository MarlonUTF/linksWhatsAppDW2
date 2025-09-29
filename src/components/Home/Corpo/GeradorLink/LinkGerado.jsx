import {
  Button,
  Box,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { ContentCopy, WhatsApp, Check } from "@mui/icons-material";

export default function LinkGerado() {
  return (
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
        <IconButton className="bg-white hover:bg-gray-50">
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
  );
}
