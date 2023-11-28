 import * as  module from './module.mjs'
 const {input, btn, result} = module

 console.log(btn)
 console.log(result)
 btn.addEventListener("click", ()=> {
    let value = input.value
    let arr = value.split("")
    let count1 = 0
    let count2 = 0
    let answer = null
    for(let item of arr) {
        if(item === '(') {
            count1++
        } else if(item === ')') {
            count2++
        } else {
            answer = "qavslar topilmadi"
        }

    }
 
    if (count1 === 0 || count2 === 0) {
        result.innerText = "Qavslar topilmadi"
        result.style.color = "red"
    } else if(count1 === count2 ){
        result.innerText = "Qavslar soni teng"
        result.style.color = "green"
    } else if (count1 !== count2) {
        result.innerText = "Qavslar soni teng emas"
        result.style.color = "orange"
    }
})
 


 