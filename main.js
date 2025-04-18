const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const navNums = document.querySelectorAll('.navButton')
const steps = document.querySelectorAll('.step')

let currentPage = 1;


const movefocus = () => {
    navNums.forEach((e)=> {
        e.classList.remove("active");
    })
    steps.forEach((e)=> {
        e.classList.remove("active");
    })
    
    navNums[currentPage-1].classList.add("active");
    steps[currentPage-1].classList.add("active");
}

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentPage>=4){
        return
    } else{
        currentPage += 1;
        movefocus();
    }
    
})
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentPage<=1){
        return
    } else{
        currentPage -= 1;
        movefocus();
    }
})

