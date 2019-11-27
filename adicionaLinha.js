function adicionaLinha(idTabela) {
    var form = document.getElementById('formulario');
    var professor = document.getElementById('professor');
    var sala = document.getElementById('sala');
    var data = document.getElementById('data');

    var table = $('#example').DataTable();
    var rowNode = table
        .row.add( [ professor.value, sala.value, data.value,"<button onclick='removeLinha(this)'>Cancelar reunião</button>"] )
        .draw()
        .node();

    $( rowNode )
        .css( 'color', 'black' )
        .animate( { color: 'black' } );
}
