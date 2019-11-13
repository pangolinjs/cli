import objectFromArray from '../../../functions/object-from-array'

const form = document.querySelector('.js-form')

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(event.target)

    for (const entry of formData.entries()) {
      console.log(objectFromArray(entry))
    }
  })
}
