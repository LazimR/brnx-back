import app from './app';

const PORT = 3100;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log('NODE_ENV:', process.env.NODE_ENV);
});
