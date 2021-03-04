const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const filterListRef = document.querySelector(".js-list");
const filterInputRef = document.querySelector("#filter");

filterInputRef.addEventListener("input", _.debounce(onFilteredItems, 300));

const listItemMarkup = filterListCreateMarkup(tech);
filterListRef.innerHTML = listItemMarkup;

function filterListCreateMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

function onFilteredItems(event) {
  console.log("input");
  const filterValue = event.target.value.toLowerCase();
  const filteredItems = tech.filter((item) =>
    item.label.toLowerCase().includes(filterValue)
  );
  // console.log(filteredItems);
  const filteredListItemMarkup = filterListCreateMarkup(filteredItems);
  // console.log(filteredListItemMarkup);
  filterListRef.innerHTML = filteredListItemMarkup;
}
