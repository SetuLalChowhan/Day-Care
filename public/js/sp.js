// const searchFun=()=>{
//     let filter=document.getElementById('myInput').ariaValueMax.toLocaleUpperCase();
//     let myDis=document.getElementsByClassName('district');
//     let field=document.getElementsByClassName('field');
// }

function searchProduct()
{
    const inputt=document.getElementById('myInput').value.toUpperCase();
    
    const cardContainer=document.getElementById('cardl');
    console.log(cardContainer);
    const card=cardContainer.getElementsByClassName('card mb-3');
    console.log(card);


    for(let i=0;i<card.length;i++)
    {
        let title = card[i].querySelector('.row g-0.col-md-8.card-body h5.card-address')
        console.log(title);
    }

}

