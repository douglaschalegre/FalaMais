import app from './app';

const PORT = 1337;
app.listen(process.env.PORT || PORT, () =>{
  console.log(`Rodando servidor na porta ${process.env.PORT || PORT}...`)
});
