// console.log('run to javascript');

let apiCell = 'https://forkify-api.jonas.io/api/v2/recipes?search=pizza'
let sildbar = document.querySelector('.sildbar')
let btn = document.getElementById('s-btn')
let serach = document.getElementById('serach')
let main = document.querySelector('.main')

// console.log(sildbar);


function itemsFn(elment) {
    return `<div class="items" data-id=${elment.id} >
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
    // console.log(serachvalue);

    let apiRes = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${serachvalue}`)
    // console.log(apiRes);
    let result = await apiRes.json()
    // console.log(result);

    let { data: { recipes } } = result

    console.log(recipes);

    let allHtmlUi = recipes.map((recipe) => itemsFn(recipe))
    console.log(allHtmlUi);

    sildbar.innerHTML = allHtmlUi

}

let fn = async (elment) => {
    // console.log('ma chal ra hun',);
    let id = elment.dataset.id

    // console.log(id);

    let apiRes = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`)

    let result = await apiRes.json()

    // console.log(result);

    let { data: { recipe } } = result

    console.log(recipe);

    main.innerHTML = `
            <img src="${recipe.image_url}" alt="">
            <h3>Title ${recipe.title}</h3>
            <h3>Serving ${recipe.servings}</h3>
            <h3>Cooking Time ${recipe.cooking_time}</h3>
        </div>`
}


startapp()

document.addEventListener('click', (e) => {
    // console.log(e.target);

    if (e.target.classList.contains('items')) {
        // console.log('items',e.target);
        fn(e.target)

    }
})
btn.addEventListener('click', serachHandler)