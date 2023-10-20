const victims = [
  {
    "name": "Krikor Zohrab",
    "relevence": "Member of Ottoman Parliament opposed to genocide",
    "article": "https://en.wikipedia.org/wiki/Krikor_Zohrab",
    "fate": "Pvt. murder",
    "local_image": "faces/Krikor Zohrab.jpeg",
    "image_page": "https://commons.wikimedia.org/wiki/File:Krikor_Zohrab.JPG",
    "residence": "Constantinople"
  },
  {
    "name": "Daniel Varoujan",
    "relevence": "Poet",
    "article": "https://en.wikipedia.org/wiki/Daniel_Varoujan",
    "fate": "Gvnt. murder",
    "local_image": "faces/Daniel Varuzhan.jpg",
    "image_page": "https://commons.wikimedia.org/wiki/File:Daniel_Varuzhan.jpg",
    "residence": "Chankiri"
  },
  {
    "name": "Rupen Zartarian",
    "relevence": "Activist",
    "article": "https://en.wikipedia.org/wiki/Rupen_Zartarian",
    "fate": "Gvnt. murder",
    "local_image": "faces/Rupen Zartarian.jpg",
    "image_page": "https://commons.wikimedia.org/wiki/File:Rupen_Zartarian,_Gray,_Cropped.jpg",
    "residence": "Constantinople"
  },
  {
    "name": "Ardashes Harutiunian",
    "relevence": "Poet",
    "article": "https://en.wikipedia.org/wiki/Ardashes_Harutiunian",
    "fate": "Pvt. murder",
    "local_image": "faces/Ardashes Harutunian.jpg",
    "image_page": "https://commons.wikimedia.org/wiki/File:Ardashes_Harutunian2.jpg",
    "residence": "Scutari"
  },
  {
    "name": "Siamanto",
    "relevence": "Writer, poet, symbolic figure",
    "article": "https://en.wikipedia.org/wiki/Siamanto",
    "fate": "Gvnt. murder",
    "local_image": "faces/Siamanto.jpg",
    "image_page": "http://www.genocide-museum.am/fr/06.11.2018-Siamanto.php",
    "residence": "Constantinople"
  },
  {
    "name": "Ruben Sevak",
    "relevence": "Writer, poet",
    "article": "https://en.wikipedia.org/wiki/Ruben_Sevak",
    "fate": "Pvt. murder",
    "local_image": "faces/Ruben Sevak.jpg",
    "image_page": "https://en.wikipedia.org/wiki/File:Ruben_Sevak_2.jpg",
    "residence": "Constantinople"
  },
  {
    "name": "Dikran Chökürian",
    "relevence": "Writer, journal editor",
    "article": "https://en.wikipedia.org/wiki/Dikran_Ch%C3%B6k%C3%BCrian",
    "fate": "Gvnt. murder",
    "local_image": "faces/Dikran Chokourian.jpg",
    "image_page": "https://en.wikipedia.org/wiki/File:Dikran_Chokourian.jpg",
    "residence": "Constantinople"
  },
  {
    "name": "Diran Kelekian",
    "relevence": "Journalist, teacher, newspaper editor",
    "article": "https://en.wikipedia.org/wiki/Diran_Kelekian",
    "fate": "Gvnt. murder",
    "local_image": "faces/Diran Kelekian.jpg",
    "image_page": "https://commons.wikimedia.org/wiki/File:Diran_Kelekian.jpg",
    "residence": "Smyrna"
  },
  {
    "name": "Tlgadintsi",
    "relevence": "Writer, teacher",
    "article": "https://en.wikipedia.org/wiki/Tlgadintsi",
    "fate": "Gvnt. murder",
    "local_image": "faces/Tlgadintsi.jpeg",
    "image_page": "https://commons.wikimedia.org/wiki/File:This_is_a_picture_of_Armenian_author_Tlgadintsi.jpeg",
    "residence": "Kharpert"
  },
  {
    "name": "Erukhan",
    "relevence": "Writer",
    "article": "https://en.wikipedia.org/wiki/Erukhan",
    "fate": "Gvnt. murder",
    "local_image": "faces/Erukhan.jpg",
    "image_page": "https://commons.wikimedia.org/wiki/File:Erukhan_photograph.jpg",
    "residence": "Kharberd"
  },
  {
    "name": "Khachatur Malumian",
    "relevence": "Journalist, activist",
    "article": "https://en.wikipedia.org/wiki/Khachatur_Malumian",
    "fate": "Gvnt. murder",
    "local_image": "faces/Khachatur Malumian.jpg",
    "image_page": "https://commons.wikimedia.org/wiki/File:Db_Agnouni_khachadour_maloumian_1.jpg",
    "residence": "Constantinople"
  }
]


drawVictimPictureFrames();
drawSpreadsheet();

function drawVictimPictureFrames() {
  victims.forEach(victimObj => {
    let victimEl = createEl("div", {class: "framed-victim-container"});
    let image = createEl("img", {class: "framed-victim-image", src: victimObj.local_image});
    victimEl.append(image);
    let frameType = Math.ceil(Math.random() * 4);
    image.dataset.frameType = frameType;
    let hoverBox = createEl("div", {class: "framed-victim-hover-box"});
    hoverBox.append(createEl("p", {class: "framed-victim-name", text: victimObj.name}));
    hoverBox.append(createEl("p", {class: "framed-victim-description", text: victimObj.relevence}));
    victimEl.append(hoverBox);
    galleryFrames.append(victimEl);
  });
  let fire1interval = setInterval(() => {
    fire1.animate([{opacity: "1"}, {opacity: ".6"}, {opacity: "1"}], {duration: 3000 * Math.random() + 2000, iterations: 1});
  }, 5000);
  let fire2interval = setInterval(() => {
    fire2.animate([{opacity: "1"}, {opacity: ".4"}, {opacity: "1"}], {duration: 2000 * Math.random() + 2000, iterations: 1});
  }, 4000);
  let fire3interval = setInterval(() => {
    fire3.animate([{opacity: "1"}, {opacity: ".7"}, {opacity: "1"}], {duration: 4000 * Math.random() + 2000, iterations: 1});
  }, 6000);
}

function drawSpreadsheet() {
  let pen = spreadsheet.querySelector(".pen");
  victims.forEach(victimObj => {
    // console.log(victimObj);
    spreadsheet.insertBefore(createEl("img", {class: "image", src: victimObj.local_image}), pen);
    spreadsheet.insertBefore(createEl("div", {class: "name", text: victimObj.name}), pen);
    spreadsheet.insertBefore(createEl("div", {class: "residence", text: victimObj.residence}), pen);
    spreadsheet.insertBefore(createEl("div", {class: "occupation", text: victimObj.relevence}), pen);
    spreadsheet.insertBefore(createEl("div", {class: "hline"}), pen);
  });
}

function onScroll() {
  let galleryScale = (window.innerHeight - fireplace.getBoundingClientRect().top) / window.innerHeight;
  if (galleryScale < -0.2) galleryScale = -0.2;
  if (galleryScale > 1) galleryScale = 1;
  grandmasLove.style.setProperty("--grandma-love-scale", galleryScale);

  if (tableSection.getBoundingClientRect().top <= 0) {
    spreadsheet.classList.add("spreadsheet-fixed");
  } else {
    spreadsheet.classList.remove("spreadsheet-fixed");
  }

  let exterminationScale = (window.innerHeight - otherPapers.getBoundingClientRect().bottom) / window.innerHeight;
  if (exterminationScale < 0) exterminationScale = 0;
  if (exterminationScale > 1) {
    otherPapers.classList.add("other-papers-fixed");
    exterminationScale = 1;
  } else {
    otherPapers.classList.remove("other-papers-fixed");
  }
  exterminationOrder.style.setProperty("--scale", exterminationScale);
  talaatsLove.style.setProperty("--scale", exterminationScale);
  spreadsheet.style.setProperty("--scale", exterminationScale);

  let papersScale = (window.innerHeight - writerHomeIntro.getBoundingClientRect().top) / window.innerHeight;
  if (papersScale < 0) papersScale = 0;
  if (papersScale > 1) papersScale = 1;
  tableSection.style.setProperty("--table-section-scale", papersScale);

  // console.log(schoolhouseText.getBoundingClientRect().bottom, window.innerHeight);
  if (schoolhouseSection.getBoundingClientRect().top <= 0) {
    schoolhouseSection.classList.add("schoolhouse-fixed");
  } else {
    schoolhouseSection.classList.remove("schoolhouse-fixed");
  }

  let schoolhouseScale = (window.innerHeight - schoolhouseText.getBoundingClientRect().top) / window.innerHeight;
  if (schoolhouseScale < 0) schoolhouseScale = 0;
  if (schoolhouseScale > 1) papersScale = 1;
  schoolhouseSection.style.setProperty("--schoolhouse-scale", schoolhouseScale);
  schoolhouseText.style.setProperty("--schoolhouse-scale", schoolhouseScale);
}

onScroll();

document.addEventListener("scroll", onScroll);

document.addEventListener("mousemove", e => {
  const exponent = .8;
  document.body.style.setProperty("--mouseXRelative", Math.abs((e.clientX / window.innerWidth - .5) * 2) ** exponent * Math.sign(e.clientX / window.innerWidth - .5));
  document.body.style.setProperty("--mouseYRelative", Math.abs((e.clientY / window.innerHeight - .5) * 2) ** exponent * Math.sign(e.clientY / window.innerHeight - .5));
});

function drawVictimCircle() {
  let rotationAngle = 0;
  victims.forEach((victimObj, index) => {
    let victimEl = createEl("div", {class: "victim", id: `victim-${index}`});
    victimEl.angle = Math.PI * 2 * (index + 1) / victims.length;
    victimEl.style.setProperty("--distance-variation", 1 + (Math.random() / 4));
    victimEl.style.setProperty("--sin", Math.sin(victimEl.angle + rotationAngle));
    victimEl.style.setProperty("--cos", Math.cos(victimEl.angle + rotationAngle));
    victimEl.append(createEl("img", {class: "victim-image", src: victimObj.local_image}));
    victimEl.append(createEl("p", {class: "victim-name", text: victimObj.name}));
    victimContainer.append(victimEl);
  });

  // document.addEventListener("mousemove", e => {
  //   let x = Math.abs((e.clientX / document.body.clientWidth) - 0.5);
  //   let y = Math.abs((e.clientY / document.body.clientHeight) - 0.5);
  //   let mouseDistance = Math.sqrt(x ** 2 + y ** 2);
  //   let scale = mouseDistance * -40 + 40;
  //   victimContainer.style.setProperty("--distance-from-center", `${scale}vh`);
  //   victimContainer.style.setProperty("--scale", `${scale ** .5 / 5}`);
  // });

  let interval = setInterval(() => {
    rotationAngle += 0.0007;
    [...victimContainer.children].forEach(victimEl => {
      victimEl.style.setProperty("--sin", Math.sin(victimEl.angle + rotationAngle));
      victimEl.style.setProperty("--cos", Math.cos(victimEl.angle + rotationAngle));
    });
  }, 1000 / 30);
}