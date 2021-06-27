const alphabetArray = [
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"],
  ["q", "r", "s", "t"],
  ["u", "v", "w", "x"],
  ["y", "z"],
];
let pagesize = 4;
let currentPage = 0;
const Pagination = {
  firstPage: 1,
  lastPage: alphabetArray.length - (alphabetArray.length % pagesize),
  getPageItems: function getPageItems() {
    let pageItems = alphabetArray[currentPage];
    return pageItems;
  },

  nextPage: function nextPage() {
    currentPage = currentPage + 1;
    return currentPage;
  },
  goToPage: function goToPage(pageNum) {
    return pageNum;
  },
  prevPage: function prevPage() {
    let prevPage = currentPage - 1;
    return prevPage;
  },
};

console.log(Pagination.getPageItems());
console.log(Pagination.nextPage());
console.log(Pagination.getPageItems());
console.log(Pagination.prevPage());
