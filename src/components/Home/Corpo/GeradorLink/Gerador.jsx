import {Box} from "@mui/material";
import FormLink from "./FormLink";
import LinkGerado from "./LinkGerado";

export default function Gerador() {
  return (
    <Box className="max-w-2xl mx-auto p-6">
      <FormLink />
      <LinkGerado />
    </Box>
  );
}
