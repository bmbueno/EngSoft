var db = openDatabase('Reunioes', '1.0', 'BancoDeDados', 2048 * 1024);
db.transaction(function(criar){
    //criar.executeSql("DROP TABLE reunioes");
    criar.executeSql("CREATE TABLE IF NOT EXISTS reunioes ( id INTEGER PRIMARY KEY, orientador TEXT, sala TEXT, data DATE, horario TIME)");
    });

db.transaction(function(criar){
    //criar.executeSql("DROP TABLE funcionarios");
    criar.executeSql("CREATE TABLE IF NOT EXISTS funcionarios ( id INTEGER PRIMARY KEY, nome TEXT, setor TEXT, email TEXT, reunioes TEXT)");
    });

function novoFuncionario(nome, setor, email, reunioes){
    db.transaction(function(tx){
        tx.executeSql('INSERT INTO funcionarios (nome, setor, email, reunioes) VALUES(?,?,?,?)',[nome, setor, email, reunioes]);
    });
}

function mostrarReunioes(){

    db.transaction(function(tx){
        tx.executeSql('SELECT * FROM reunioes',[], function(tx,resultado){
            var rows = resultado.rows;
            
            for(var i = 0; i < rows.length; i ++){
                var table = $('#example').DataTable();
                var rowNode = table
                .row.add( [ rows[i].orientador, rows[i].sala, rows[i].data, rows[i].horario,
                    "<button onclick='cancelaReuniao("+ rows[i].id +")' class='btn btn-danger btn-sm' >Cancelar reunião</button>"] )
                .draw()
                .node();
            }
        });
    },null);
    
}
function cancelaReuniao(id) {

    // $( "button.excluir" ).click(function() {
    //   $(this).parent().parent().remove();
    // });
    
    db.transaction(function(tx){
      tx.executeSql('DELETE FROM reunioes WHERE id=?',[id]);
  });
  
    setTimeout(function() {location.reload();},10);
   
  }
