const integrantes = document.querySelector('.integrantes');

const pessoas = [
	{
		"name": "Colaborador 1",
		"image_path": "images/profiles/avatar.png",
		"lattes_url": ""
	},
	{
		"name": "Colaborador 2",
		"image_path": "images/profiles/avatar.png",
		"lattes_url": ""
	},
	{
		"name": "Colaborador 3",
		"image_path": "images/profiles/avatar.png",
		"lattes_url": ""
	},
	{
		"name": "Colaborador 4",
		"email": "email4",
		"image_path": "images/profiles/avatar.png",
		"lattes_url": ""
	},
	{
		"name": "Colaborador 5",
		"email": "email5",
		"image_path": "images/profiles/avatar.png",
		"lattes_url": ""
	}
];

pessoas.forEach((pessoa) => {

	integrantes.innerHTML += `		
	<div class="card-professor">
		<div class="foto">
			<img class="image-professor" src="${pessoa.image_path}">
		</div>
		<div class="professor-content">
			<a href="${pessoa.lattes_url}" class="name-professor" target="_blank">${pessoa.name}</a>
		</div>
		
	</div>`
	
});

