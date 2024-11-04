const ativadorToast = document.getElementById('btn-ativador');
const mensagem = document.getElementById('Toast-mensagem');

if(ativadorToast) {
  ativadorToast.addEventListener('click', function(){
    const toast = new bootstrap.Toast(mensagem); 
    toast.show(); 
  });
}