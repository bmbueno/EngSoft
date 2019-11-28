var imported = document.createElement('script');
imported.src = 'databases.js';
document.head.appendChild(imported); 

class funcionario {
    constructor(nome, setor){
        this.nome = nome;
        this.setor = setor;
        this.reunioes = [];
    }

    
}

class supervisor extends funcionario {
    constructor(nome, setor){
        super(nome,setor);
        this.reunioesMarcadas = [];
    }

    marcaReuniao(idTabela) {
        var form = document.getElementById('formulario');
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
                //reunioes.push(reuniao1);
            });
        });
        
    }
    desmarcaReuniao(id) {
        // $( "button.excluir" ).click(function() {
        //   $(this).parent().parent().remove();
        // });
        
            
       
      }
    }
