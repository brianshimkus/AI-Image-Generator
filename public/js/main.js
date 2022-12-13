function onSubmit(e) {
	e.preventDefault()

	const prompt = document.querySelector('#prompt').value
	const size = document.querySelector('#size').value

	if (prompt === '') {
		alert('Please enter text')
		return
	}

	console.log('success')
}

document.querySelector('#image-form').addEventListener('submit', onSubmit())
