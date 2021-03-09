/**elem.parentNode - выберет родителя elem
elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
elem.previousSibling - выберет элемент "слева" от elem (его предыдущего соседа)
elem.previousElementSibling - выберет узел-элемент "слева" от elem (его предыдущего соседа)
elem.nextSibling - выберет элемент "справа" от elem (его следующего соседа)
elem.nextElementSibling - выберет узел-элемент "справа" от elem (его предыдущего соседа) */

let div = document.querySelector("div");
let heading = document.querySelector("h2");
let paragraph = document.querySelector("p");

console.log(div.parentNode);
console.log(div.childNodes);
console.log(div.children);
console.log(div.firstChild);
console.log(div.firstElementChild);
console.log(heading.previousSibling);
console.log(heading.previousElementSibling);
console.log(paragraph.previousElementSibling);
console.log(paragraph.classList.contains("paragraph"));

const clone = div.cloneNode(true);
clone.classList.add("clone");
div.after(clone);
