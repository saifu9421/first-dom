//    wher too  add

//   const placesList = document.getElementById('places-list');
// //   what to be added
//   const  li = document.createElement('li');
//  li.innerText = "paher tuli";

// //  add the child
// placesList.appendChild(li);
  

// new section  added 
// wher to add
const main  =  document.getElementById('main-container');

// what to be added 
   const section = document.createElement('section');
   section.classList.add("text-center");
   section.classList.add("list-style");

   const  h1 = document.createElement("h1");
   h1.innerText =  "Hi iam a new section";
   section.appendChild(h1);

   const ul = document.createElement("ul");
   const li1 =  document.createElement('li');
   li1.innerText="hi i am saif";
   const li2  = document.createElement('li');
   li2.innerText = "emny crite";
   const li3 = document.createElement("li");
   li3.innerText = "Mango";
 
   ul.appendChild(li1);
   ul.appendChild(li2);
   ul.appendChild(li3);

   section.appendChild(ul);
    
   main.appendChild(section);



// set HTML derectley 
   const sectionDrees = document.createElement("section");
   sectionDrees.classList.add('text-center');
   sectionDrees.innerHTML = `
      <h1> My dress section</h1>
    <ul>
    <li>
     T-shirt 
    </li>
    <li>
    pant
    </li>
    <li>
    short Pant
    </li

    </ul>
   
   `
   main.appendChild(sectionDrees);

   const sectionDivice  = document.createElement("section");
   sectionDivice.innerHTML =`
     <h1>
     Divice
     </h1>
     <ol>
     <li>
      Mobile
     </li>
     <li>
     laptop
     </li>
     <li>
     computer
     </li>
     </ol>
   `
   main.appendChild(sectionDivice);