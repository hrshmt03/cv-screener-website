console.log('this is cv scanner project');
//data is array of  of objects
const data=[
    {
     name: 'Rohan das',
     age: 18,
     city: 'allahabad',
     language: 'java',
     image: 'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    {
        name:'mohan das',
        age:58,
        city:'banaras',
        language:'python',
        image:'https://randomuser.me/api/portraits/med/men/45.jpg'
       },
       {
        name:'kayn williamson',
        age:28,
        city:'napier',
        language:'c++',
        image:'https://randomuser.me/api/portraits/med/men/35.jpg'
       },
       {
        name:'hima das',
        age:24,
        city:'himanchal pradesh',
        language:'java script',
        image:'https://randomuser.me/api/portraits/med/women/25.jpg'
       }
]
//cv iterator
function cvIterator(profiles)
{
 let nextIndex=0;
 return{
     next: function(){
         return nextIndex<profiles.length?
           {value: profiles[nextIndex++], done: false} :
           {done: true}

     }
 };
}
//button listener for next button
const candidates=cvIterator(data);
nextCv();
let next=document.getElementById('next');
next.addEventListener('click',nextCv);
function nextCv()
    {
        const currentCandidate=candidates.next().value;
        if(currentCandidate!=undefined)
        {
        let image1=document.getElementById('image1');
        let profile=document.getElementById('profile');
   image1.innerHTML=`<img src="${currentCandidate.image}" alt="">`;
   profile.innerHTML=`<ul class="list-group">
   <li class="list-group-item">Name: ${currentCandidate.name}</li>
   <li class="list-group-item">${currentCandidate.age} years old</li>
   <li class="list-group-item">Belongs to ${currentCandidate.city}</li>
   <li class="list-group-item">usees ${currentCandidate.language}</li>
 </ul>`
    }
    else
    {
    alert('end of candidates applicationa');
    window.location.reload();
    }
    }
