// import {
//   Box,
// } from "@mui/material";
// import FormContato from "./FormContato";
// import ListaContato from "./ListaContato";
// import { useEffect, useState } from "react";

// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://postgresql://postgres:[YOUR-PASSWORD]@db.pxahbijwhfmuwxcpicih.supabase.co:5432/postgres.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4YWhiaWp3aGZtdXd4Y3BpY2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4OTUyNjYsImV4cCI6MjA3NDQ3MTI2Nn0.MyJouLnH8fnW5PDsiKXTK_HYhsHcyD0qzMCXf3kMQ0w'

// export const supabase = createClient(supabaseUrl, supabaseKey)

// export default function Agenda() {

//   // Listar contatos do usuário logado
//   async function listarContato() {
//     const { data: contatos, error } = await supabase
//       .from('contacts')
//       .select('*')
//       .order('created_at', { ascending: false })

//     if (error) {
//       console.error('Erro ao listar contatos:', error.message)
//       return []
//     }

//     return contatos // array de objetos
//   }

//   useEffect(() => {
//     listarContato();
//   }, []);

//   return (
//     <Box className="max-w-4xl mx-auto p-6">
//       <FormContato />
//       <ListaContato contatos={contatos} />
//     </Box>
//   );
// }