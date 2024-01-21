const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://cdn.britannica.com/83/211283-050-656809FD/Tyrannosaurus-Rex-Struthiomimus-dinosaurs.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMohlMFYhdvrLxOrT_WRMB1lRvz281_duRw&usqp=CAU"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM2HZVfWL0upAnqmtq3c53YV75Wip6QdtlQ&usqp=CAU"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhxZqLm2CSnxx40LDncsuQQ2k3KcTIDu7BQ&usqp=CAU"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rK602D9Mye0Edo4fWAABiVM-MjrYHDQMcA&usqp=CAU"
    },
    {
      id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUR69KZkSZ78vh8MMr8h41wVfEe07Jo-yc3y8KBuROWG5R9FsnOmwvUNHsI5jSYPZspoQ&usqp=CAU"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njc-Ia97GQzZNiiXan4EeQNFjECMjrxmJg&usqp=CAU"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkumOZ2xDsWjDoSaEledkYyBzNwtl8gqcHA&usqp=CAU"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-AZpF24GdQruL_ZbLwEBdm27o7K-omiIEOTJEoJxRxaiWkc1cbMrQXkZI1SX9qLYqZQ&usqp=CAU"
    },
    {
      id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-TtrdCzMgVAGNwMSzXB5sjjp4MNTHlSdyQ&usqp=CAU"
    },
    {
      id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/11/rottweiler-temperament.jpeg.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg"
    },
    {
      id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzhYcyFRVMy8byv88ICpTEgUCVcO3KV26MA&usqp=CAU"
    }
  ];

  const btns = document.querySelector("#btns");
  btns.innerHTML =`
  <button type="button" class="btn btn-cats btn-md">Cats</button>
  <button type="button" class="btn btn-dogs btn-md">Dogs</button>
  <button type="button" class="btn btn-dino btn-md">Dino</button>
  <button type="button" class="btn btn-all btn-md">All</button>
  `
  const targetElement = document.querySelector("#container");
  

  //This gets the id of html and puts the content inside that html element
  const renderToDom = (divID, htmlToRender) => {
    const selectedDiv = document.querySelector(divID)
    selectedDiv.innerHTML = htmlToRender;
  }

  const cardsOnDOM = (array) => {
    let domString = "";
    for (const pet of array) {
      domString += 
      `<div class="card border-success mb-3" style="max-width: 18rem;">
      <div class="card-header bg-transparent border-success">
      ${pet.name}</div>
      <div class="card-body text-success">
        <img src="${pet.imageUrl}" class="card-img-top" alt="...">
        <h5 class="card-title">${pet.color}</h5>
        <p class="card-text">Special Skill: ${pet.specialSkill}</p>
      </div>
      <div class="card-footer bg-transparent border-success">${pet.type}</div>
      </div>`
    }

    renderToDom("#container", domString)
  }
  
  // This is to test that this function works: cardsOnDOM(pets)\
  /*
  This is to test renderToDom function
    let love = `<p>SMall feet</p>`;
    renderToDom("#container", love)
  */

  // targetElement.innerHTML += domString;

  cardsOnDOM(pets)

  const filter = (array, animalString) => {

    const newArray = []
    for (const pet of array) {
      if (pet.type === animalString) {
        newArray.push(pet);
      } 
    }
    return newArray;
  }
  
  
  const catBtn = document.querySelector(".btn-cats");
  const dogBtn = document.querySelector(".btn-dogs");
  const dinoBtn = document.querySelector(".btn-dino");
  const all = document.querySelector(".btn-all")

  catBtn.addEventListener("click", () => {
    const theCats = filter(pets, "cat")
    cardsOnDOM(theCats)
  });

  dogBtn.addEventListener("click", () => {
    const theDogs = filter(pets, "dog")
    cardsOnDOM(theDogs)
  });

  dinoBtn.addEventListener("click", () => {
    const theDinos = filter(pets, "dino")
    cardsOnDOM(theDinos)
  });

  all.addEventListener("click", () => {
    cardsOnDOM(pets)
  });

  
  const form = document.querySelector("form")
  
  const createNewPet = (e) => {
    e.preventDefault();

    const newPet = {
      id: pets.length + 1,
      name: document.querySelector("#pet-name").value,
      color: document.querySelector("#pet-color").value,
      specialSkill: document.querySelector("#pet-skill").value,
      type: document.querySelector("#pet-type").value,
      imageUrl: document.querySelector("#pet-url").value
    }

    pets.push(newPet);
    cardsOnDOM(pets);
    form.reset();
  }

  form.addEventListener('submit', createNewPet);
