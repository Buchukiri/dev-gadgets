// const articles = {
// id1 : {
//         name : "Canard Jaune",
//         prix : "11€95"
//     },
// id2 : {
//         name : "CanardDragon",
//         prix : "11€95"
//     },
// id3 : {
//         name : "Canard Geek",
//         prix : "11€95"
//     },
// id4 : {
//         name : "Canard Licorne",
//         prix : "11€95"
//     },
// id5 : {
//         name : "Canard Bowie",
//         prix : "11€95"
//     }
// }




                    //VERSION MOBILE

// 2 boutons in mediaqueries to switch next and prev
const prevbtn = document.getElementById("pictures-prev")
const nextbtn = document.getElementById("pictures-next")
const imgXl = document.getElementById("main-art-img")


const srcImgList = [
    "img/canard-jaune-1-l.png",
    "img/canard-jaune-2-l.png",
    "img/canard-jaune-3-l.png",
    "img/canard-jaune-4-l.png",
    "img/canard-jaune-5-l.png"
]


// clicks
prevbtn.addEventListener("click",function (event) {
    imgXl.src = srcImgList[4]
    
})


nextbtn.addEventListener("click",function (event) {
    imgXl.src = srcImgList[0]
    nextbtn.addEventListener("click",function (e) {
        imgXl.src = srcImgList[1]
        nextbtn.addEventListener("click",function (event) {
            imgXl.src = srcImgList[2]
                nextbtn.addEventListener("click",function (event) {
            imgXl.src = srcImgList[3]
                nextbtn.addEventListener("click",function (event) {
            imgXl.src = srcImgList[4]
        })
        })
        })
    })
    
    });




                    //VERSION PC

function mouseOver() {
    const ulThumbs = document.getElementById("thumbs");
    const thumbs = document.querySelectorAll(".thumbs-itm .thumbs-img");
    const thumbImg = document.querySelectorAll(".thumbs-img")

    thumbs.forEach(li => {
        li.addEventListener("mouseover",function (e){
        imgXl.src = this.src;
        })     
    });
}
mouseOver()



                // TOGLE BOUTONS

function toggleAvantages() {
    document.getElementById("avantages-btn").addEventListener("click", function (event) {
        document.getElementById("product-advantages").classList.toggle("show-hide");
    })
}
function toggleCaracteristiques() {
        document.getElementById("caracteristiques-btn").addEventListener("click", function (event) {
        document.getElementById("product-car").classList.toggle("hide-show");

    })
}

toggleCaracteristiques()
toggleAvantages()


                // ADD TO CHART

const cartList = "";

// click
const inputValue = document.getElementById("add-qty")
const addBtn = document.getElementById("add-cta");

// function add to cart
function addCart() {
    const spanNbmbr = document.querySelector(".cart-nb");
        addBtn.addEventListener("click", function (event) {
            spanNbmbr.innerHTML = inputValue.value;
            addBtn.removeEventListener("click",addCart)
            addBtn.innerHTML = "Déjà au panier"
            addBtn.classList.add("add-cta-off")
            
            



        // if (spanNbmbr.value >= 100) {
        //     spanNbmbr.value.innerHTML = "+99";
        // }


        //    if (inputValue.value != 0) {
        //         spanNbmbr.value ++
        //    }

        // if (document.querySelector(".cart-nb").value >= 100) {
        //     document.querySelector(".cart-nb").innerHTML = inputValue.value;
        // }
       
        

 
})
}
addCart()
