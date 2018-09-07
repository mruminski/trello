var genId = function() {
  return Math.ceil(Math.random() * 1000);
}

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
  this.columns = [];
}

Board.prototype.create = function() {
  this.element = document.createElement('div');
  this.element.id = this.name;
  document.body.appendChild(this.element);
}

function Column(name) {
  this.name = name;
  this.id = genId();
}

Column.prototype.create = function() {
  this.element = document.createElement('div');
  header = document.createElement('h3');
  this.element.className = 'column column--'+this.name;
  board.columns.push({ name: this.name, id: this.id });
  this.element.setAttribute('data-col', this.id);
  header.className = 'column__header';
  header.innerText = this.name;
  board.element.appendChild(this.element);
  this.element.appendChild(header);
}

function Card(column, name) {
  this.name = name;
  this.column = column;
}

Card.prototype.create = function() {
  this.element = document.createElement('div');
  this.element.className = 'card';
  this.element.innerText =  this.name;
  var selectedColumn = document.querySelector("[data-col='"+this.column+"']");
  selectedColumn.appendChild(this.element);
}

function Button(text) {
  this.text = text || 'Add task';
}

Button.prototype.create = function() {
  this.element = document.createElement('button');
  this.element.className = 'btn';
  this.element.innerText = this.text;
  this.element.addEventListener('click', function() {
    var wrapper = document.createElement('div');
    var select = document.createElement('select');
    var optionDefault = document.createElement('option');
    optionDefault.innerText = 'Select column';
    select.appendChild(optionDefault);
    var columnsLen = board.columns.length;
    for (var i = 0; i < columnsLen; i++) {
      var option = document.createElement('option');
      option.setAttribute('id', board.columns[i].id);
      option.innerText = board.columns[i].name;
      select.appendChild(option);
    }
    wrapper.appendChild(select);
    document.body.appendChild(wrapper);
    select.addEventListener('change', function(e) {
      var card = new Card(e.target.selectedOptions[0].id, window.prompt('Enter a task name'));
      card.create();
      e.target.selectedIndex = '';
    })
  })
  document.body.appendChild(this.element); 
}

var board = new Board('board');
board.create();

var todo = new Column('todo');
todo.create();

var doing = new Column('doing');
doing.create();

var done = new Column('done');
done.create();

var addBtn = new Button();
addBtn.create();
