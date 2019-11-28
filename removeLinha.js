var imported = document.createElement('script');
imported.src = 'databases.js';
document.head.appendChild(imported); 


function removeLinha(id) {
  cancelaReuniao(id);

  // $( "button.excluir" ).click(function() {
  //   $(this).parent().parent().remove();
  // });

  setTimeout(function() {location.reload();},10);
 
}
