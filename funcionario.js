var imported = document.createElement('script');
imported.src = 'databases.js';
document.head.appendChild(imported); 

class funcionario {
    constructor(nome, setor, email){
        this.nome = nome;
        this.setor = setor;
        this.email = email;
        this.reunioes = [];
    }
    mostrarReunioes(){
        db.transaction(function(tx){
            tx.executeSql('SELECT * FROM reunioes',[], function(tx,resultado){
                var rows = resultado.rows;
                
                for(var i = 0; i < rows.length; i ++){
                    var table = $('#example').DataTable();
                    var rowNode = table
                    .row.add( [ rows[i].orientador, rows[i].sala, rows[i].data, rows[i].horario,
                        "<button class='btn btn-danger btn-sm' disabled >Cancelar reunião</button>"] )
                    .draw()
                    .node();
                }
            });
        },null);
    }
    marcaReuniao(){
        alert('Voce nao tem permissao para marcar reunioes!');
    }

    registrar(){
        novoFuncionario(this.nome, this.setor, this.email, this.reunioes);
    }
}

class supervisor extends funcionario {
    constructor(nome, setor){
        super(nome,setor);
        this.reunioesMarcadas = [];
    }

    mostrarReunioes(){

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

    marcaReuniao(idTabela) {
        var orientador = document.getElementById('orientador').value;
        var sala = document.getElementById('sala').value;
        var dia = document.getElementById('dia').value;
        var horario = document.getElementById('horario').value;
    
    
        db.transaction(function(tx){
            tx.executeSql('INSERT INTO reunioes (orientador, sala, data, horario) VALUES(?,?,?,?)',[orientador,sala, dia, horario], function(tx, id){
                var table = $('#example').DataTable();
                
                var rowNode = table
                .row.add( [ orientador, sala, dia, horario,"<button onclick= 'cancelaReuniao("+ id.insertId +")' class='btn btn-danger btn-sm excluir' >Cancelar reunião</button>"] )
                .draw()
                .node();

                var reuniao1 = new reuniao(id.insertId ,sala, orientador, dia, horario);
        
            });
        });
        
    }
    }
