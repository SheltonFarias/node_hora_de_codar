// O node garante a ordem de execucao assim indo de acordo com a funcao e executada
function a() {
  console.log("executando a()");
}

function b() {
  console.log("executando b()");
}

function c() {
  console.log("executando c()");
}

b();
c();
a();
