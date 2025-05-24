<script>
  const form = document.querySelector('.formulario');
  const sucesso = form.querySelector('.sucesso');
  const erro = form.querySelector('.erro');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        sucesso.style.display = 'block';
        erro.style.display = 'none';
        form.reset();
      } else {
        throw new Error('Erro no envio');
      }
    }).catch(() => {
      sucesso.style.display = 'none';
      erro.style.display = 'block';
    });
  });
</script>
