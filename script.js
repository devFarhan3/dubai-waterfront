// const scriptURL = 'https://script.google.com/macros/s/AKfycbxWqZKVNzv3Di4HDSws75y8I6Mt7PBBf5DE1g2U3uOkLUqVYjEffHRSTfyynHtG9ddmSg/exec'
// const form = document.querySelector('#form')
// const formBtn = document.querySelector('#submit')


// form.addEventListener('submit', e => {
//     e.preventDefault()
//     formBtn.disabled = true
//     formBtn.innerHTML = "Loading..."

//     console.log(form)
//     fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: "no-cors" })
//         .then(response => {
//             formBtn.disabled = false
//             formBtn.innerHTML = "Submit"
//             alert('Success!', response)
//         })
//         .catch(error => {
//             formBtn.disabled = false
//             formBtn.innerHTML = "Submit"
//             alert('Error!', error.message)
//         })
// })
