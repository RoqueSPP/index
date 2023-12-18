(function () {

	const cep = document.querySelector("input[name=postalCode]");
  
  cep.addEventListener('blur', e => {
  		const value = cep.value.replace(/[^0-9]+/, '');
      const url = `https://viacep.com.br/ws/${value}/json/`;
      
      fetch(url)
      .then( response => response.json())
      .then( json => {
      		
          if( json.logradouro ) {
          	document.querySelector('input[name=address]').value = json.logradouro;
            document.querySelector('input[name=neighborhood]').value = json.bairro;
            document.querySelector('input[name=city]').value = json.localidade;
            document.querySelector('input[name=state]').value = json.uf;
          }
      })
  });
})();