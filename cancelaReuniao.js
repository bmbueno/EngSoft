var imported = document.createElement('script');
imported.src = 'databases.js';
document.head.appendChild(imported); 


function cancelaReuniao(id) {

  // $( "button.excluir" ).click(function() {
  //   $(this).parent().parent().remove();
  // });
  
  db.transaction(function(tx){
    tx.executeSql('DELETE FROM reunioes WHERE id=?',[id]);
});

  setTimeout(function() {location.reload();},10);
 
}
