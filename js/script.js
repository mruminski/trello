function Title(name) {
  this.name = name || 'Trello Board';
}

Title.prototype.create = function() {
  this.element = document.createElement('h1');
  this.element.id = 'title';
  this.element.innerText = this.name;
  document.body.appendChild(this.element);
}

var title = new Title();
title.create();

function Board(name) {
  this.name = name;
}

Board.prototype.create = function() {
  this.element = document.createElement('div');
  this.element.id = this.name;
  document.body.appendChild(this.element);
}

function Column(name) {
  this.name = name;
}

Column.prototype.create = function() {
  this.element = document.createElement('div');
  header = document.createElement('h3');
  this.element.className = 'column column--'+this.name;
  header.className = 'column__header';
  header.innerText = this.name;
  board.appendChild(this.element);
  this.element.appendChild(header);
}

function Card() {
  var col = document.querySelector('.column--todo');
  this.col = col;
}

Card.prototype.create = function() {
  this.element = document.createElement('div');
  this.element.className = 'card';
  this.element.innerText =  window.prompt('Enter a task name');
  this.col.appendChild(this.element);
}

function Button(text) {
  this.text = text || 'Add a new task';
}

Button.prototype.create = function() {
  this.element = document.createElement('button');
  this.element.innerText = this.text;
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