const titleElemnt = new Vue ({
    el:"#title" ,
    data: {
        title :"HELLO VUE!!!",
        message : "I love learning vue.js"
    }

})

const appElement = new Vue({
    el : "#app" ,
    data :{
        headline:"Teacher Profile" ,
        name:"Fatemeh" ,
       subject :"Vue.js"
    }
})
const book = new Vue ({
    el: "#book" ,
    data: {
        title: "alchemist",
        author: "Pol",
        summary:"NO NEED"
    }

})
