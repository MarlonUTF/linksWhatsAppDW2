import { useState } from "react";
import { Box, Tabs, Tab, Paper } from "@mui/material";
import { BsChatLeftTextFill, BsJournalText } from "react-icons/bs";
import Gerador from "./GeradorLink/Gerador";
import Agenda from "../Agenda/Agenda";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Main() {
  const [value, setValue] = useState(0);
  const [telefone, setTelefone] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          backgroundColor: "white",
          "& .MuiTab-root": {
            fontSize: "1rem",
            fontWeight: 600,
            py: 2,
            minHeight: 64,
          },
          "& .Mui-selected": {
            color: "#10b981 !important",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#10b981",
          },
        }}
      >
        <Tab
          icon={<BsChatLeftTextFill className="text-lg" />}
          iconPosition="start"
          label="Gerador de Links"
        />
        <Tab
          icon={<BsJournalText className="text-lg" />}
          iconPosition="start"
          label="Agenda de Contatos"
        />
      </Tabs>

      <Box sx={{ backgroundColor: "#f8fafc", minHeight: 400 }}>
        <TabPanel value={value} index={0}>
          <Gerador telefone = {telefone}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Agenda setTelefone ={setTelefone} setValue ={setValue} />
        </TabPanel>
      </Box>
    </Paper>
  );
}
