let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles)
styles[((styles.length - 1) / 2)] = "Classics";
console.log(styles)
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);
