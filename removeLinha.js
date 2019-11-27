var imported = document.createElement('script');
imported.src = 'databases.js';
document.head.appendChild(imported); 


function removeLinha(id) {
  cancelaReuniao(id);
  location.reload();
}
