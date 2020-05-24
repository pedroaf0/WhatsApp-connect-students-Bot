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
  const callback = {'condicao_cb':'pre_registro','contexto_cb':'nome'};
        await db('numeros').insert({
          'condicao':'none',
          'callback':JSON.stringify(callback),
          'numero':numero,
          'nome':'none'
        });

      return 'Olá estranho, qual é o seu nome?';
    },
    "condicao": async function nome(numero){
      const callback = {'condicao_cb':'pre_registro','contexto_cb':'condicao'};
            await   db('numeros').where({'numero': numero }).update({
              'callback':JSON.stringify(callback)
            });
    
          return 'Você é estudadante ou professo?';
        }
  }
}