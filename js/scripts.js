var elShoppingListForm = document.querySelector('.shopping-list-form');
var elShoppingListInput = document.querySelector('.shopping-list-input');
var elShoppingList = document.querySelector('.shopping-list');

var list = [];

elShoppingListForm.addEventListener('submit', function (evt) {
  evt.preventDefault(); 

  var newLiIteam = document.createElement('li');
  newLiIteam.classList.add('list-group-item', 'list-group-item-action');

  list.push(elShoppingListInput.value);

  newLiIteam.textContent = elShoppingListInput.value;
  elShoppingListInput.value = '';
 
  elShoppingList.appendChild(newLiIteam);
});

// Check list
var elCheckList = document.querySelector('.check-list-form');
var elCheckInput = document.querySelector('.check-list-input');

elCheckList.addEventListener('submit', function(evt) {
  evt.preventDefault();

  // var key = ;
  if(list.includes(elCheckInput.value.trim())) {
    alert("Ha mavjud");
  } else {
    alert("Ro'hatda yo'q");
  }

  elCheckInput.value = '';
});

