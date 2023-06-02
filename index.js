const listMovies = [
  {
    name: 'I am legend',
    image: './movies-images/action-1.jpeg',
    genre: 'action'
  },
  {
    name: 'The fast and the furious',
    image: './movies-images/laga-1.jpeg',
    genre: 'laga'
  },
  {
    name: 'Fast and furious 7',
    image: './movies-images/laga-2.jpeg',
    genre: 'laga'
  },
  {
    name: 'Mulan',
    image: './movies-images/action-4.jpeg',
    genre: 'action'
  },
  {
    name: 'Transformers',
    image: './movies-images/action-5.jpeg',
    genre: 'action'
  },
  {
    name: 'Smile',
    image: './movies-images/horror-1.jpeg',
    genre: 'horror'
  },
  {
    name: 'It',
    image: './movies-images/horror-2.jpeg',
    genre: 'horror'
  },
  {
    name: 'House of the witch',
    image: './movies-images/horror-3.jpeg',
    genre: 'horror'
  },
  {
    name: 'The tokoloshe',
    image: './movies-images/horror-4.jpeg',
    genre: 'horror'
  },
  {
    name: 'The conjuring',
    image: './movies-images/horror-5.jpeg',
    genre: 'horror'
  }
]

const title = ['HORROR', 'ACTION', 'LAGA']

const changeTitle = () => {
  const titleHeader = document.getElementById('title')
  const randomIndex = Math.floor(Math.random() * title.length)
  titleHeader.textContent = title[randomIndex]
}
setInterval(() => {
  changeTitle()
}, 4000)

const showAlert = () => {
  alert("website dalam perbaikan")
}

const changeBackground = () => {
  const R = document.getElementById('R').value
  const G = document.getElementById('G').value
  const B = document.getElementById('B').value

  document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
  console.log(R, G, B)
}

const handleSearch = () => {
  const search = document.getElementById('search').value.toLowerCase()
  const listMovie = document.querySelector('.list-movie')

  let filterData = listMovies.filter((item) => {
    return item.name.toLowerCase().includes(search) || item.genre.toLowerCase().includes(search)
  })

  let result = filterData.map((item) => {
    return `<img src=${item.image} alt=${item.name} />`
  })

  listMovie.innerHTML = result.join('')
}

window.onload = () => {
  let result = listMovies.map((item) => {
    return `<img src=${item.image} alt=${item.name} />`
  })
} 


