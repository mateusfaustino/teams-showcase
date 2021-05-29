const teams = [
    {
        id:"1",
        name:"América",
        imageLink:"assets/america.png"
    },
    {
        id:"2",
        name:"Athlético",
        imageLink:"assets/athletico.png"
    },
    {
        id:"3",
        name:"Atlético Go",
        imageLink:"assets/atleticogo.png"
    },
    {
        id:"4",
        name:"Atletico mg",
        imageLink:"assets/atleticomg.png"
    },
    {
        id:"5",
        name:"Bahia",
        imageLink:"assets/bahia.png"
    },
    {
        id:"6",
        name:"Bragantino",
        imageLink:"assets/bragantino.png"
    },
    {
        id:"7",
        name:"Ceará",
        imageLink:"assets/ceara.png"
    },
    {
        id:"8",
        name:"Chapecoense",
        imageLink:"assets/chapecoense.png"
    },
    {
        id:"9",
        name:"Corinthians",
        imageLink:"assets/corinthians.png"
    },
    {
        id:"10",
        name:"Cuiabá",
        imageLink:"assets/cuiaba.png"
    },
    {
        id:"11",
        name:"Flamengo",
        imageLink:"assets/flamengo.png"
    },
    {
        id:"12",
        name:"Fluminense",
        imageLink:"assets/fluminense.png"
    },
    {
        id:"13",
        name:"Fortaleza",
        imageLink:"assets/fortaleza.png"
    },
    {
        id:"14",
        name:"Grêmio",
        imageLink:"assets/gremio.png"
    },
    {
        id:"15",
        name:"Internacional",
        imageLink:"assets/internacional.png"
    },
    {
        id:"16",
        name:"Juventude",
        imageLink:"assets/juventude.png"
    },
    {
        id:"17",
        name:"Palmeiras",
        imageLink:"assets/palmeiras.png"
    },
    {
        id:"18",
        name:"Santos",
        imageLink:"assets/santos.png"
    },
    {
        id:"19",
        name:"São paulo",
        imageLink:"assets/saopaulo.png"
    },
    {
        id:"20",
        name:"Sport",
        imageLink:"assets/sport.png"
    }
];

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

function renderTeamList(teamName, teamImageLink){
    const brandsList = document.querySelector('ul.brands__list');
    const brandItem = createElement("li", "brand__item", brandsList,null);
    const anchor = createElement("a", null, brandItem);
    const brandItemImage = createElement ("div", "brand__item__image", anchor,null);
    const image = createElement("img", null, brandItemImage,{alt:teamName, src:teamImageLink});
    const brandItemTitle = createElement("h4",'brand__item__title', anchor,null);
    brandItemTitle.innerText=teamName;
} 
document.addEventListener('DOMContentLoaded', ()=>{
       teams.forEach(team => {
           renderTeamList(team.name,team.imageLink);
       });

})
