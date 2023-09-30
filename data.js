let title = "Forrest Gump"
console.log(title)

let author = "Winston Groom"
console.log(author)

let year = 1986
console.log(year)

let isNewerThan2000 = false
console.log(isNewerThan2000)

let age  = 2023-year
console.log(age)

let characters = ["Forrest Gump", "Mrs.Gump", "Jenny Curran", "Lieutenant Dan Taylor"]
console.log(characters)
console.log(characters[0])
console.log(characters[1])

let favoriteBook = {
    title: "Forrest Gump",
    author: "Winston Groom",
    year: 1986,
    isNewerThan2000: false,
    age: 2023-year,
    characters: ["Forrest Gump", "Mrs.Gump", "Jenny Curran", "Lieutenant Dan Taylor"]
}
console.log(favoriteBook.author)
console.log(favoriteBook.year)

console.log(favoriteBook.characters[0])

let favoriteBooks = [{
    title: "Forrest Gump",
    author: "Winston Groom",
    year: 1986,
    isNewerThan2000: false,
    age: 2023-year,
    characters: ["Forrest Gump", "Mrs.Gump", "Jenny Curran", "Lieutenant Dan Taylor"]
},
{
    title: "Shutter Island",
    author: "Dennis Lehane",
    year: 2003,
    isNewerThan2000: true,
    age: 2023-year,
    characters: ["Andrew Leaddis", "Teddy Dabiels", "Chuck Alue", "Dolores Chanal"]
}
]
console.log(favoriteBooks[1].title)
console.log(favoriteBooks[1].characters[0])

console.log(favoriteBooks[1].year-favoriteBooks[0].year)

