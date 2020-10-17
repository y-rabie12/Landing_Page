/*
   There are three main requirements that are needed to be done to this
   project:
   1- Create a dynamic navbar that automatically adds a new link as a new 
      section is  added.
   2-Add

*/
const sections = document.querySelectorAll('.sections');//
const documentFrag = document.createDocumentFragment();
const navList = document.getElementById('navbar__list');

 sections.forEach(function(section)
{
    let list = document.createElement('li');
    let anchorTag = document.createElement('a');
    navList.appendChild(list);
    list.appendChild(anchorTag);
    let dataNav = section.getAttribute('data-nav');
    let ids = "#" + section.getAttribute('id');
    anchorTag.setAttribute('href',ids);
    anchorTag.innerHTML= dataNav;
    list.addEventListener('click',function(event)
    {
        event.preventDefault();
        section.scrollIntoView({behavior:'smooth'})
    })

})
navList.appendChild(documentFrag);



let observer = new IntersectionObserver(isInviewport,[1.0]);

function isInviewport(entries,observer) 
{
   
    entries.forEach((entry) =>
    {
        
        if(entry.isIntersecting)
        {
            entry.target.classList.add('your-active-class'); 
         
        }
        else if (!(entry.isIntersecting))
        {
            entry.target.classList.remove('your-active-class');
        }
    })
}

sections.forEach(section => {observer.observe(section)})
     