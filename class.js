class reuniao {
    constructor(id, sala, orientador, dia, horario){
        this.id = id;
        this.sala = sala;
        this.orientador = orientador;
        this.dia = dia;
        this.horario = horario;
        this.status = 'marcada';
        this.participantes = [];
    }
}
class funcionario {
    constructor(nome, setor){
        this.nome = nome;
        this.setor = setor;
        this.reunioesId = '';
    }

    marcarReuniao(){
        
        var orientador = document.getElementById('orientador').value;
        var sala = document.getElementById('sala').value;
        var dia = document.getElementById('dia').value;
        var horario = document.getElementById('horario').value;

        var reuniao1 = new reuniao(sala, orientador, dia, horario);

        this.reunioesId = this.reunioesId + reuniao1.id;

    }
}

var fun = new funcionario('Bruno', 'TI');