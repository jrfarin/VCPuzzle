var img = [
    './img/asymetricDress.jpg', 
    './img/bikini.jpg', 
    './img/redDress.jpg', 
    './img/wedding.jpg', 
    './img/swimsuit.jpg',
]

var old = 4

function randomize() {
    let root = document.documentElement
    root.style.setProperty('--image', 'url(' + img[old] + ')')
    old++
    if (old > 4) {
        old = 0
    }
    var ul = document.querySelector('#puzz');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
}
randomize()

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.className);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text")

    if (ev.target.className == data) {
        ev.target.classList.add('dropped')
        document.querySelector('.' + data + "[draggable='true']").classList.add('done')

        if (document.querySelectorAll('.dropped').length == 9) {
            document.querySelector('#puz').classList.add('allDone')
            document.querySelector('#puz').style.border = 'none'
            document.querySelector('#puz').style.animation = 'allDone 1s linear forwards'

            setTimeout(function () {
                reload()
                randomize()
            }, 1500)
        }
    }
}

function reload() {
    document.body.innerHTML = "<div id='puz'>  <i class='first' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='secon' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='third' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='fourt' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='fifth' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='sixth' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='seven' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='eight' ondrop='drop(event)' ondragover='allowDrop(event)'></i>  <i class='ninth' ondrop='drop(event)' ondragover='allowDrop(event)'></i></div><div id='puzz'>  <i class='third' draggable='true' ondragstart='drag(event)'></i>  <i class='first' draggable='true' ondragstart='drag(event)'></i>  <i class='secon' draggable='true' ondragstart='drag(event)'></i>  <i class='fourt' draggable='true' ondragstart='drag(event)'></i>  <i class='fifth' draggable='true' ondragstart='drag(event)'></i>  <i class='sixth' draggable='true' ondragstart='drag(event)'></i>  <i class='seven' draggable='true' ondragstart='drag(event)'></i>  <i class='eight' draggable='true' ondragstart='drag(event)'></i>  <i class='ninth' draggable='true' ondragstart='drag(event)'></i>  </div>";
}