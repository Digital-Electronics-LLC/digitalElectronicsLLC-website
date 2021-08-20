var nav = document.createElement("nav")
nav.innerHTML = `
  <a class="logo" href="https://digital-electronics.w3spaces.com/">Digital Electronics</a>
  <a href="/Projects.html?bypass-cache=1629392725">Projects</a>
  <a href = "/About.html?bypass-cache=1629392725l">About</a>
  <a href= "/Join.html?bypass-cache=1629394689">Join</a>
  <a href = "/people.html?bypass-cache=1629409447">People</a>
  <a href = "/news.html?bypass-cache=1629424011">News</a>
`
document.body.appendChild(nav)
var style = document.createElement("style")
style.id = "navbarStyle"
style.innerHTML = `
nav{
  background:var(--black);
}
nav > a{
  padding:15px;
  color:white;
  display:inline-block;
  text-decoration:none;
}
nav > a:not(.logo){
  float:right;
}
nav > a:hover{
  background:var(--color-1);
}
`
document.head.appendChild(style)
