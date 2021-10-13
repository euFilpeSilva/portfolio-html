var curso = {
  titulo:"javascript basic",
  instrutor: "abestado",
  nivel: "1",
  datap: false,
  views:0,
  atualizeviews: function(){
    return ++curso.views;
  }
}
console.log(curso);

