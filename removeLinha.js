function removeLinha(linha) {
  var row = linha.parentNode.parentNode.rowIndex;
  var table = $('#example').DataTable();
  var rowNode = table
      .row(row)
      .remove()
      .draw();
}
