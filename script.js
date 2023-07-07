let btn = document.querySelector('h6')
let slide = document.querySelector('#n-up-slide')
console.log(slide);
let flag = 0
btn.addEventListener('click',function(){
    console.log('hey');
    if (flag == 0) {
        btn.innerHTML = '<i class="ri-door-closed-fill"></i>'
        slide.style.right = 0
        flag = 1
    } else {
        btn.innerHTML = '<i class="ri-door-open-line"></i>'
        slide.style.right = `${-100}%`
        flag = 0
    }
})