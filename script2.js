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

    marcarReuniao(){
        
        var orientador = document.getElementById('orientador').value;
        var sala = document.getElementById('sala').value;
        var dia = document.getElementById('dia').value;
        var horario = document.getElementById('horario').value;

        var reuniao1 = new reuniao(sala, orientador, dia, horario);

        this.reunioes.push(reuniao1);
        alert( 'rerea');
        location.href("http://pt.stackoverflow.com");
    }
}

var fun = new funcionario('Bruno', 'TI');