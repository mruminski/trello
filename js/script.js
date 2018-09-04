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

function Card(column) {
  this.column = column;
}

Card.prototype.create = function() {
  this.element = document.createElement('div');
  this.element.className = 'card';
  this.element.innerText =  window.prompt('Enter a task name');
  this.column.element.appendChild(this.element);
}

function Button(text) {
  this.text = text || 'Add a new task';
}

var selectCol = function() {
  var userChoice = window.prompt('Select a column number for a new task;'+
  '1 - todo; 2 - doing; 3 - done');

  switch (userChoice) {
    case '1':
      var task = new Card(todo);
      task.create();
      break;
    case '2':
      var task = new Card(doing);
      task.create();
      break;
    case '3':
      var task = new Card(done);
      task.create();
      break;
    default:
      window.alert('Wrong choice');
  }
}

Button.prototype.create = function() {
  this.element = document.createElement('button');
  this.element.innerText = this.text;
  this.element.addEventListener('click', selectCol);
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