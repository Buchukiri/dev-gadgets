                //VERSION MOBILE

// 2 boutons in mediaqueries to switch next and prev
const prevbtn = document.getElementById("pictures-prev")
const nextbtn = document.getElementById("pictures-next")
const imgXl = document.querySelector(".pictures-img")

const srcImgList = [
    "img/canard-jaune-1-l.png",
    "img/canard-jaune-2-l.png",
    "img/canard-jaune-3-l.png",
    "img/canard-jaune-4-l.png",
    "img/canard-jaune-5-l.png"
]


// clicks
prevbtn.addEventListener("click",function (event) {
   
    imgXl.src="img/canard-jaune-5-l.png"
})


nextbtn.addEventListener("click",function (event) {

        imgXl.src ="img/canard-jaune-2-l.png"
    });




                    //VERSION PC

const ulThumbs = document.getElementById("thumbs")



ulThumbs.addEventListener("mouseover",function (event) {
  
    
})


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