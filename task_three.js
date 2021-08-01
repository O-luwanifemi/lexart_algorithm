const generateId = () => {
  let id = "";
  const alphaNumerals = [ 
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,4,6,7,8,9,0
  ];

  for (let i = 0; i < 16; i++) {
    let randomNumber = Math.floor(Math.random() * alphaNumerals.length);
    if (i && i % 4 === 0) id += "-" + alphaNumerals[randomNumber];
    else id += alphaNumerals[randomNumber];
  }

  return id;
};

const id = generateId();
console.log(id);