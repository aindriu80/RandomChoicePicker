const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

tagsEl.style.display = 'none'
textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
})

function createTags(input) {
  tagsEl.style.display = 'block'
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())
  tagsEl.innerHTML = ''
  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}
