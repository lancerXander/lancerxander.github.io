document.addEventListener('click', function (event) {
  console.log(event.target.parentElement.parentElement);
  if (event.target.parentElement.parentElement.matches('.gallery-image__preview')) {
    event.target.parentElement.parentElement.classList.remove('gallery-image__preview');
    event.target.parentElement.parentElement.scrollIntoView();
  } else if (event.target.matches('.gallery-image__media')) {
    // Remove any existing preview classes
    var previewing = document.getElementsByClassName('gallery-image__preview');
    for (el of previewing) {
      el.classList.remove('gallery-image__preview');
    }
		// Preview the clicked figure
    event.target.parentElement.parentElement.classList.add('gallery-image__preview');
    event.target.parentElement.parentElement.scrollIntoView();
	}
}, false);
