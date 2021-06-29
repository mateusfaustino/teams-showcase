
var firebaseConfig = {
apiKey: "AIzaSyCeovbXd6n0XscLGddEFoeBdiYDGdsPoQ4",
authDomain: "teams-8d01d.firebaseapp.com",
projectId: "teams-8d01d",
storageBucket: "teams-8d01d.appspot.com",
messagingSenderId: "945903313491",
appId: "1:945903313491:web:7e5c3b8a1e8e319d181ca6",
measurementId: "G-C88GRXHFT3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let database = firebase.firestore();


function createElement(elementType, elementClass, parent, imageParams){
    const element = document.createElement(elementType); 
    if(elementClass != 0){
        element.classList.add(elementClass);
    }
    if(imageParams != null){
        element.alt=imageParams.alt;
        element.src=imageParams.src; 
    }
    parent.appendChild(element);
    return(element);
}

function renderTeamList(teamName, teamImageLink, state){
    const brandsList = document.querySelector('ul.brands__list');
    const brandItem = createElement("li", "brand__item", brandsList,null);
    const anchor = createElement("a", null, brandItem);
    const brandItemImage = createElement ("div", "brand__item__image", anchor,null);
    const image = createElement("img", null, brandItemImage,{alt:teamName, src:teamImageLink});
    const brandItemTitle = createElement("h4",'brand__item__title', anchor,null);
    brandItemTitle.innerText=teamName + ` (${state})`;
} 
document.addEventListener('DOMContentLoaded', ()=>{
       database.collection('teams').get().then((snapshot)=>{
        snapshot.forEach((document)=>{
            let team = document.data();
            renderTeamList(team.name,`assets/${team.image}`,team.state);
        })
    })

})
