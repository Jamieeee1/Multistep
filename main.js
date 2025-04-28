const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const navNums = document.querySelectorAll('.navButton')
const steps = document.querySelectorAll('.step');
const toggle = document.querySelector('#switchtoggle');
const monthly = document.querySelectorAll('.monthly');
const yearly = document.querySelectorAll('.yearly');
const plans = document.querySelectorAll('.plans');
const checkboxes = document.querySelectorAll('.Addons');
const detailsInput = document.querySelectorAll('.details-input');
const yearLabel = document.querySelector('.yearlabel');
const monthLabel = document.querySelector('.monthlabel');
const addOnsDiv = document.querySelectorAll('.add-ons');

//plan result
const planName = document.querySelector('.p-name');
const planPrice = document.querySelector('.p-price');

//addons result 
const addOnsResult = document.querySelector('.p-add-ons');

//Total result
const totalDiv = document.querySelector('.total-div');



let phase = 'bymonth';
let currentPage = 0;
let checkValArray = [];

let sum1;
let sum2;
let sum3;
let planPriceLabel;
let addOnLabel;

let currentPlan;
let currentPlanPrice

addOnsDiv.forEach((element,index)=> {
    let child = document.querySelectorAll('.add-ons .add-on-check .Addons')[index];
    element.addEventListener('click', () => {
       child.click();
    })
} )

const monthlyItems = {
    monthyPlans : {
        'Arcade' : 9,
        'Advanced' : 12,
        'Pro' : 15
    },
    monthlyAddons : {
        'Online service' : 1,
        'Larger storage' : 2,
        'Customizable profile' : 2
    }
};

const yearlyItems = {
    yearlyPlans : {
        'Arcade' : 90,
        'Advanced' : 120,
        'Pro' : 150
    },
    yearlyAddons : {
        'Online service' : 10,
        'Larger storage' : 20,
        'Customizable profile' : 20
    }
};

// console.log(yearlyItems.monthlyAddons["Customizable profile"])


// functions
const movefocus = () => {
    navNums.forEach((e)=> {
        e.classList.remove("active");
    })
    steps.forEach((e)=> {
        e.classList.remove("active");
    })
    
    navNums[currentPage].classList.add("active");
    steps[currentPage].classList.add("active");
}

const priceLabel = (phase) => {
    if(phase === 'bymonth') {
        return 'mo'
    } else {
        return 'yr'
    };
};

const planLabel = (phase) => {
    if(phase === 'bymonth') {
        return 'month'
    } else {
        return 'year'
    };
}

const getPlan = (planPriceLabel) => {
    if(phase==='bymonth') {
        return monthlyItems.monthyPlans[planPriceLabel]
    } else {
        return yearlyItems.yearlyPlans[planPriceLabel]
    };
};

const getAddon = (addOnLabel) => {
    if (phase === 'bymonth') {
        return monthlyItems.monthlyAddons[addOnLabel]
    } else {
        return yearlyItems.yearlyAddons[addOnLabel]
    };
};

const asignPlan = () => {
    plans.forEach((e)=> {
        if (e.checked) {
            planPrice.textContent = '$' + getPlan(e.value) + '/' + priceLabel(phase);
            if(planPriceLabel === e.value) {
                sum1 = getPlan(e.value)
                return
            } else{
                planPriceLabel = e.value
                planName.textContent = `${e.value} (${planLabel(phase)}ly)`
                sum1 = getPlan(e.value)
            };
        };
    });
};

const asignAddOns = () => {
    addOnsResult.innerHTML = '';
    sum2 = 0
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            addOnLabel = checkbox.value;
            addOnsResult.innerHTML += `
            <div>
            <span>${checkbox.value}</span> <span class="addPrices">+$${getAddon(addOnLabel)}/${priceLabel(phase)}</span>
            </div>
            `
            sum2 += getAddon(addOnLabel);
        };
    };
};

const totalSum = (sum3) => {
    sum3 = sum1 + sum2;

    totalDiv.innerHTML = `
        <span class="total-label">Total (per ${planLabel(phase)})</span> <span class="total-cost">$${sum3}/${priceLabel(phase)}</span>
    `
};

const toggleVisibility = (currentPage) => {
    if(currentPage >= 1) {
        prevBtn.style.visibility = "visible";
    } else {
        prevBtn.style.visibility = "hidden";
    }
}

const checkInputValidity = (pass) => {
    checkValArray = [];
    pass.forEach((input) => {
        let checkVal = input.checkValidity();
        console.log(checkVal)
        checkValArray.push(checkVal)
        if (input.value === "") {
            window.alert(`${input.id} field cannot be left empty`);
        }
        if(checkVal === true) {
            input.style.borderColor = "#ed3548";
        }
    })
}

const moveTo = () => {
    currentPage = 1;
    movefocus();
}


// next and back bottons
nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(currentPage == 1) {
        asignPlan()
    }
    if(currentPage ==2) {
        asignAddOns()
        totalSum()
    }

    if(currentPage>=3){
        return
    } else{
        currentPage += 1;
        movefocus();
        toggleVisibility(currentPage)
        if(currentPage === 3) {
            nextBtn.innerHTML = "Confirm";
        };
        // if(currentPage === 0) {
        //     // checkInputValidity(detailsInput)
        //     // console.log(checkValArray)
        //     if(checkValArray.includes(true)) {
        //         return
        //     } else {
        //         currentPage += 1;
        //         movefocus();
        //         toggleVisibility(currentPage)
        //     }
        // } else {
            // if(currentPage === 3) {
            //     nextBtn.innerHTML = "Confirm";
            // };
        //     currentPage += 1;
        //     movefocus();
        // }
    }
    
})

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentPage<=0){
        return;
    } else{
        currentPage -= 1;
        movefocus();
        nextBtn.innerHTML = "Next Step";
        toggleVisibility(currentPage)
    }
})

// toggle 
toggle.addEventListener('change', () => {
    if(toggle.checked) {
        phase = 'byyear';
        yearLabel.style.color = "hsl(213, 96%, 18%)";
        monthLabel.style.color = "hsl(231, 11%, 63%)";
        yearly.forEach((e)=> {
            e.style.display = "block";
        })
        monthly.forEach((e)=> {
            e.style.display = "none";
        });
    }
    else {
        phase = 'bymonth';
        monthLabel.style.color = "hsl(213, 96%, 18%)";
        yearLabel.style.color = "hsl(231, 11%, 63%)";
        yearly.forEach((e)=> {
            e.style.display = "none";
        })
        monthly.forEach((e)=> {
            e.style.display = "block";
        })
    }
})