function tree_toggle(event) {
    event = event || window.event
    var clickedElem = event.target || event.srcElement
 
    if (!hasClass(clickedElem, 'Expand')) {
        return // клик не там
    }
 
    // Node, на который кликнули
    var node = clickedElem.parentNode
    if (hasClass(node, 'ExpandLeaf')) {
        return // клик на листе
    }
 
    // определить новый класс для узла
    var newClass = hasClass(node, 'ExpandOpen') ? 'ExpandClosed' : 'ExpandOpen'
    // заменить текущий класс на newClass
    // регексп находит отдельно стоящий open|close и меняет на newClass
    var re =  /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/
    node.className = node.className.replace(re, '$1'+newClass+'$3')
}
 
 
function hasClass(elem, className) {
    return new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className)
}

// Найти все элементы, у которых есть атрибут data-showlement
var elementsWithDependent = document.querySelectorAll('[data-showelement]');
for (var i = 0; i < elementsWithDependent.length; i++) {
	//Добавим к нему событие onClick:
	
	var element = elementsWithDependent[i];
	element.addEventListener('click', function () {
		//Скрываем все dependent-item (потом мы один покажем, но пока что скроем все)
		var dependentItems = document.getElementsByClassName('dependent-item');
		for (var j = 0; j < dependentItems.length; j++) {
			dependentItems[j].style.display = 'none';
		}

		//Получаем data-showelement (в нём хранится ID того, что показать)
		var dependentElementId = this.getAttribute('data-showelement');
		// Попробуем найти этот элемент, если найдётся — покажем
		var dependentElement = document.getElementById(dependentElementId);
		if (dependentElement) {
			dependentElement.style.display = '';
		}

	});



};

// document.getElementById('save').onclick = function () {
// 	var dependentImages = document.getElementsByTagName('img');
// 	for (var j = 0; j < dependentImages.length; j++) {
// 		var dependentElementId = this.getAttribute('data-showelement');
// 		var dependentElement = document.getElementById(dependentElementId);
// 		if (dependentElement) {
// 			console.log(dependentImages[j]);
// 			//dependentElement.style.display = '';
// 		}
// 		//dependentImages[j].style.display = 'none';
// 	}

// };
