var imported = document.createElement('script');
imported.src = 'databases.js';
document.head.appendChild(imported); 

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
    statusRealizada(){
        this.status = 'realizada';
    }
    statusCancelada(){
        this.status = 'cancelada';
    }

    adicionaConvidados(convidado){
        this.participantes.push(convidado);
    }
    
}