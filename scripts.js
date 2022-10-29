const loadBtn = document.querySelector('.js-load')
const resultsContainer = document.querySelector('.js-results')
const searchInput = document.querySelector('.js-input')

loadBtn.addEventListener('click', function (evt) {
	const searchValue = searchInput.value.trim().toLowerCase()
	evt.preventDefault()
	fetch(`https://api.github.com/users/${searchValue}`)
		.then(data => data.json())
		.then(
			data =>
				(resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
		)
})

//////////////////////1.1//

const loadBtn2 = document.querySelector('.js-load2')
const resultsContainer2 = document.querySelector('.js-results2')
const searchInput2 = document.querySelector('.js-input2')

loadBtn2.addEventListener('click', function (evt) {
	const searchValue2 = searchInput2.value.trim().toLowerCase()
	evt.preventDefault()
	const post = data => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${searchValue2}`)
			.then(
				data =>
					(resultsContainer2.innerHTML = `
				<div >
					<h3>${data.data.id}</h3>
					<p>Name: ${data.data.name} </p>
					<p>Username: ${data.data.username}</p>
					<p>Phone: ${data.data.phone}</p>
<h4>Address- City: <span>${data.data.address.city}</span></h4>
			<h4>Street: <span>${data.data.address.city}</span></h4>
			<h4>Suite: <span>${data.data.address.suite}</span></h4>
			<h4>Zipcode: <span>${data.data.address.zipcode}</span></h4> 
					</div>`)
				// console.log(data)
			)
	}
	post()
})
