const db = require('./database/db');
exports.callbackDB  = {
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
    "nome": async function nome(numero, nome){
        await   db('numeros').where({'numero': numero }).update({
            'nome':nome
          });

      return  {'condicao':'pre_registro','contexto':'condicao'};
    },
    "condicao": async function nome(numero, body){
      const callback = {'condicao_cb':'pre_registro','contexto_cb':'condicao'};
            await   db('numeros').where({'numero': numero }).update({
              'condicao':body
            });
    
          return {'condicao':'pre_registro','contexto':'condicao'};
        }
  }
}