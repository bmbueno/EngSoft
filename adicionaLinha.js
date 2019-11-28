var imported = document.createElement('script');
imported.src = 'databases.js';
document.head.appendChild(imported); 

function adicionaLinha(idTabela) {
    var form = document.getElementById('formulario');
    var orientador = document.getElementById('orientador').value;
    var sala = document.getElementById('sala').value;
    var dia = document.getElementById('dia').value;
    var horario = document.getElementById('horario').value;

    novaReuniao(sala, orientador, dia, horario);
    
}
