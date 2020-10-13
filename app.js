
const sections = document.querySelectorAll('.sections');
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
       // anchor links with the hash 
    let anchorSelector = 'a[href^="#"]'; 
      
       // Collect all such anchor links 
    let anchorList =  
           document.querySelectorAll(anchorSelector); 
         
       // Iterate through each of the links 
       anchorList.forEach(link => { 
           link.onclick = function (e) { 
               e.preventDefault(); 
               section.scrollIntoView({behavior:'smooth'})
           } 
       }); 
})
navList.appendChild(documentFrag);



let observer = new IntersectionObserver(isInviewport,[0.1,1.0]);

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

        // Define selector for selecting 
     