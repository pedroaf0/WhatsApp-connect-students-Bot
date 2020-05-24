const db = require('./database/db');
exports.ResponseDb  = {
  "Professor": {
    "materia": function materia(){
      return 
    },
    "padrão": "funtion callback"
  },
  "aluno": {
    "padrão": "funtion callback",
    "fazer-pesquisa": "funtion callback",
    "fazer-pergunta": "funtion callback"
  },
  "pre_registro": {
    "nome": async function nome(numero){
  const callback =  (body, numero)=>{
         db('numeros').where({'numero': numero }).update({
          'nome':body
        });
        return  { 'condicao':'pre_registro', 'contexto':'condicao' };
      }
        await db('numeros').insert({
          'condicao':'none',
          'callback':callback.toString(),
          'numero':numero,
          'nome':'none'
        });

      return 'Olá estranho, qual é o seu nome?';
    },
    "condicao": async function nome(numero){
      const callback =  (body, numero)=>{
             db('numeros').where({'numero': numero }).update({
              'condicao':body,
              
            });
            return  { 'condicao':body, 'contexto':'padrão' };
          }
            await   db('numeros').where({'numero': numero }).update({
              'callback':callback.toString(),
              
            });
    
          return 'Você é estudadante ou professo?';
        }
  }
}