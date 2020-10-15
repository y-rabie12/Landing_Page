/*
   There are three main requirements that are needed to be done to this
   project:
   1- Create a dynamic navbar that automatically adds a new link as a new 
      section is  added.
   2- Add smooth scrolling behavior to the links. 
   3- Show which section is in the active state. 
   

*/
// This is the first that involves creating the dynamic navbar and smooth scrolling behavior. 
const sections = document.querySelectorAll('.sections');// sections stores a Node List of the section on the page. 
const documentFrag = document.createDocumentFragment(); // This document fragment is used when the list items and links are created. 
const navList = document.getElementById('navbar__list'); // navlist stores the 'ul' element. 
/*
  This for each loop, loops on all the sections of the page creating 
  an list element and an anchor element for each section found on the page
*/
 sections.forEach(function(section)
{
    //create an 'li' element.
    let list = document.createElement('li');
    // create an 'a' element. 
    let anchorTag = document.createElement('a');

    // append the list element to the 'ul' and append the 'a' element to the list element. 
    navList.appendChild(list);
    list.appendChild(anchorTag);

    // get the data-nav attribute for each section. 
    let dataNav = section.getAttribute('data-nav');
    let ids = "#" + section.getAttribute('id'); // 'ids' stores the ID attribute of each section. 
    anchorTag.setAttribute('href',ids); // for the value for each 'href' to the 'ids'. 
    anchorTag.innerHTML= dataNav; // set the content of each anchorTags to the data-nav attribute. 

    // This part adds the smooth scrolling behavior. 
    list.addEventListener('click',function(event)
    {
        // Here, once clicked, prevent the default behavior which is scrolling so fast. 
        event.preventDefault();

        // for each section add the scrollIntoView method to create smooth scrolling behavior. 
        section.scrollIntoView({behavior:'smooth'});
    })

})
// Finally, append the document fragment to the unordered list. 
navList.appendChild(documentFrag);
/*
   The second part below is about adding the active class
   to a section, once it is within the viewport. I've
   used the Intersection Observer API, which basically
   keeps track of when the target element enters the viewport. 
*/

// create a new Instersection
let observer = new IntersectionObserver(viewPort,[0.1,1.0]);

function viewPort(entries,observer) 
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

sections.forEach(section => {observer.observe(section)});
     
