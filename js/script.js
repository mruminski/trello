var title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Trello Board';
document.body.appendChild(title);

function Board(name) {
  this.name = name;
}

Board.prototype.create = function() {
  var self = this;
  board = document.createElement('div');
  board.id = this.name;
  document.body.appendChild(board);
}

function Column(name) {
  this.name = name;
}

Column.prototype.create = function() {
  var self = this;
  column = document.createElement('div');
  header = document.createElement('h3');
  column.className = 'column column--'+this.name;
  header.className = 'column__header';
  header.innerText = this.name;
  board.appendChild(column);
  column.appendChild(header);
}

function Card() {}

Card.prototype.create = function() {
  card = document.createElement('div');
  card.className = 'card';
  card.innerText =  window.prompt('Enter a task name');
  column.appendChild(card);
}

function Button() {}

Button.prototype.create = function() {
  this.element = document.createElement('button');
  this.element.innerText = 'Add a new task';
  this.element.addEventListener('click', function() {
    var task = new Card();
    task.create();  
  });
  document.body.appendChild(this.element); 
}

var trello = new Board('board');
trello.create();

var todo = new Column('todo');
todo.create();

var doing = new Column('doing');
doing.create();

var done = new Column('done');
done.create();

var addBtn = new Button();
addBtn.create();