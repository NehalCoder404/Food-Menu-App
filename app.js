// console.log('run to javascript');

let apiCell = 'https://forkify-api.jonas.io/api/v2/recipes?search=pizza'
let sildbar = document.querySelector('.sildbar')
let btn = document.getElementById('s-btn')
let serach = document.getElementById('serach')

// console.log(sildbar);


function itemsFn(elment) {

    return `<div class="items">
        <img src='${elment.image_url}'alt="">
            <div class="productInfo">
                <h3>${elment.title}</h3>
                <p>${elment.publisher}</p>
            </div>
    </div>`
}

async function startapp() {

    // .then .catch apple
    // fetch(apiCell)
    //     .then((res) => {
    //         // console.log(res.json());
    //         return res.json()
    //     }).then((actualData) => {
    //         console.log(actualData);
    //     })
    //     .catch((err) => {
    //         console.log(err);

    //     });

    let apires = await fetch(apiCell)

    let result = await apires.json()
    // console.log(result);

    let { data: { recipes } } = result

    // console.log(recipes);

    let htmlForUi = recipes.map((elment) => {
        // console.log(elment);
        return itemsFn(elment)

    })

    // console.log(htmlForUi);
    sildbar.innerHTML = htmlForUi
}


async function serachHandler() {
    let serachvalue = serach.value
    console.log(serachvalue);
    
    let apiRes = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${serachvalue}`)
    // console.log(apiRes);
    let result = await apiRes.json()
    console.log(result);


    
}




startapp()

btn.addEventListener('click', serachHandler)