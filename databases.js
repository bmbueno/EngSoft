var db = openDatabase('Reunioes', '1.0', 'BancoDeDados', 2048 * 1024);
db.transaction(function(criar){
    criar.executeSql("CREATE TABLE IF NOT EXISTS reunioes ( id INTEGER PRIMARY KEY, orientador TEXT, sala TEXT, data DATE, horario TIME)");
    });

db.transaction(function(criar){
    criar.executeSql("CREATE TABLE IF NOT EXISTS funcionarios ( id INTEGER PRIMARY KEY, nome TEXT, setor TEXT, reunioes TEXT)");
    });
    
function novaReuniao(sala, orientador, dia, horario){
    db.transaction(function(tx){
        tx.executeSql('INSERT INTO reunioes (orientador, sala, data, horario) VALUES(?,?,?,?)',[orientador,sala, dia, horario]);
    });
}

function novoFuncionario(sala, orientador, dia, horario){
    db.transaction(function(tx){
        tx.executeSql('INSERT INTO funcionarios (nome, setor, reunioes) VALUES(?,?,?,?)',[nome, setor, reunioes]);
    });
}

function cancelaReuniao(idReuniao){
    db.transaction(function(tx){
        tx.executeSql('DELETE FROM reunioes WHERE id=?',[idReuniao]);
    });
}

function mostrarReunioes(){

    db.transaction(function(tx){
        tx.executeSql('SELECT * FROM reunioes',[], function(tx,resultado){
            var rows = resultado.rows;
            
            for(var i = 0; i < rows.length; i ++){
                var table = $('#example').DataTable();
                var rowNode = table
                .row.add( [ rows[i].orientador, rows[i].sala, rows[i].data, rows[i].horario,"<button onclick='removeLinha("+ rows[i].id +")' class='btn btn-danger btn-sm' >Cancelar reunião</button>"] )
                .draw()
                .node();

            }
        });
    },null);
    
}

