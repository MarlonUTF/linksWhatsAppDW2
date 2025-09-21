import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { BsChatLeftTextFill, BsJournalText } from 'react-icons/bs';
import Gerador from './GeradorLink/Gerador';
import Agenda from './Agenda/Agenda';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Main() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          icon={<BsChatLeftTextFill />}
          iconPosition="start"
          label="Gerador de Links"
        />
        <Tab
          icon={<BsJournalText />}
          iconPosition="start"
          label="Agenda de Contatos"
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Gerador />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Agenda />
      </TabPanel>
    </Box>
  );
}
