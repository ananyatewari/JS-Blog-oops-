class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor (title, detail) {
    this.title = title
    this.detail = detail
  }
  addTitle() {
    var title_card = document.createElement('h1')
        title_card.setAttribute("id","blog-title")
        document.getElementById("card-text").appendChild(title_card)
        title_card.innerHTML += this.title
  }
  addDescription() {
    var description_card = document.createElement('p')
        description_card.setAttribute("id","blog-description")
        document.getElementById("card-text").appendChild(description_card)
        description_card.innerHTML += this.detail
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

var click = 0;
function helperAddPost() {
  if (click == 0) {
    document.getElementById("popupContact").style.display = "block"
    click++
  }
  else if (click == 1) {
    document.getElementById("popupContact").style.display = "none"
    click = 0
  }
}

function helperPost() {
  var titlecontent = document.getElementById("title").value
  var descriptioncontent = document.getElementById("detail").value

  let blogtext = new Blog (titlecontent, descriptioncontent)

  blogtext.addTitle()
  blogtext.addDescription()
}
