

var db = openDatabase('Reunioes', '1.0', 'BancoDeDados', 2048 * 1024);
db.transaction(function(criar){
    criar.executeSql("CREATE TABLE IF NOT EXISTS reunioes ( id INTEGER PRIMARY KEY, orientador TEXT, sala TEXT, data DATE, horario TIME)");
    });

function salvaBD(sala, orientador, dia, horario){
    db.transaction(function(tx){
        tx.executeSql('INSERT INTO reunioes (orientador, sala, data, horario) VALUES(?,?,?,?)',[orientador,sala, dia, horario]);
    });
}

function mostraReunioes(){}


class reuniao {
    constructor(sala, orientador, dia, horario){
        this.sala = sala;
        this.orientador = orientador;
        this.dia = dia;
        this.horario = horario;
        this.status = 'marcada';
    }
}
class funcionario {
    constructor(nome, setor){
        this.nome = nome;
        this.setor = setor;
        this.reunioes = [];
    }


    // mostraReunioes(){
    //     var tabela = document.getElementById('listaReunioes');

    //     db.transaction(function(tx){
    //         tx.executeSql('SELECT * reunioes', [], function(tx,resultado){
    //             var linhas = resultado.rows;
    //             var tr = '';
    //             for(var i = 0; i < linhas.length; i++){
    //                 tr += '<tr>';
    //                 tr += '<tr>' + linhas[i].orientador;
    //                 tr += '</tr>';
    //             }
    //             tabela
    //         }
    //     );}}
       
    // }

    markMeeting(){
        var orientador = document.getElementById('advisor').value;
        var sala = document.getElementById('room').value;
        var dia = document.getElementById('day').value;
        var horario = document.getElementById('time').value;

        var reuniao1 = new reuniao(sala, orientador, dia, horario);

        this.reunioes.push(reuniao1);

        console.log(this.reunioes);
        

        salvaBD(reuniao1.sala,reuniao1.orientador, reuniao1.dia, reuniao1.horario);
    }

}
var fun = new funcionario('bruno', 'TI');



