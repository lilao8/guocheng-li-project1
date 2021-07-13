const hamburger = document.querySelector(".fa-bars");
hamburger.addEventListener("click", () => {
  hamburger.innerHTML = "";
  const newList = document.createElement("ul");
  newList.innerHTML = '<li><a href="index.html">HOME</a></li><li><a href="#about">ABOUT</a></li><li><a href="blog.html">BLOG</a></li><li><a href="contact.html">CONTACT</a></li>';
  hamburger.appendChild(newList);
});
