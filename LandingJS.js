//reaction
var icon = document.querySelector('.like');
icon.onclick = function () {
    icon.classList.toggle('likeActive');
}

//Comments
var comments = [];

function Comment(description) {
    this.description = description;
    this.complete = false;
};

function buildComment(comment, index) {
    var commentShell = document.createElement('div');
    commentShell.setAttribute('class', 'commentShell');
    var commentText = document.createElement('span');
    var label = document.createElement('label');
    label.innerHTML = 'Comment' + ' ';
    commentText.innerHTML = comment.description;
    commentText.setAttribute('id', index);
    label.appendChild(commentText)
    commentShell.appendChild(label);
    return commentShell
};

function buildComments(comments) {
    var newArr = comments.map((c, i) => buildComment(c, i));
    return newArr;
};

function displayComments() {
    var commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = "";
    var cb = buildComments(comments);
    for (let i = 0; i < cb.length; i++) {
        commentsContainer.appendChild(cb[i])
    }
};

function addCommnent() {
    var input = document.getElementById('commentInput');
    if (input.value === '') {
        alert('no hay nada escrito')
    } else {
        var val = document.getElementById('commentInput').value;
        var newComment = new Comment(val);
        console.log(newComment)
        comments.push(newComment);
        console.log(comments)
        input.value = '';
    }
    return displayComments();
};

var boton = document.getElementById('addButton');
boton.addEventListener('click', addCommnent);