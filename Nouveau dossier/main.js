let url = 'http://adok.org/form/films/films.php';
//let url = 'http://httpstat.us/500';
fetch(url)
	.then(reponse => {
		return reponse.ok ? reponse.json() : Promise.reject(Error(reponse.statusText));
	})
	.then(films => console.log(films))
	.catch(erreur => console.log(`Erreur: ${erreur.message}`));
