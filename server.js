import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração para __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve os arquivos estáticos gerados pelo 'npm run build' na pasta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Qualquer rota que não seja um arquivo estático deve retornar o index.html
// Isso é crucial para que o React Router funcione (SPA Fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});