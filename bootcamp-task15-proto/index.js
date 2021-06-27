const pagination = {
    letters: [],
    init(array, size) {
      for (let i = 0; i < array.length; i += size) {
        let cut = array.slice(i, i + size);
        pagination.letters.push(cut);
      }
    },
    prevPage(prev) {
      return pagination.letters[prev];
    },
    nextPage(next) {
      return pagination.letters[next];
    },
    firstPage() {
      return pagination.letters[0];
    },
    lastPage() {
      return pagination.letters[pagination.letters.length - 1];
    },
    goToPage(page) {
      return pagination.letters[page];
    },
    getPageItems() {
      return pagination.letters;
    },
  };
  let abcArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  pagination.init(abcArr, 5);
  
  console.log(pagination.prevPage(1));
  console.log(pagination.getPageItems());
  console.log(pagination.nextPage(2));
  console.log(pagination.goToPage(2));
  console.log(pagination.firstPage());