const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const navNums = document.querySelectorAll(".navButton");
const steps = document.querySelectorAll(".step");
const toggle = document.querySelector("#switchtoggle");
const monthly = document.querySelectorAll(".monthly");
const yearly = document.querySelectorAll(".yearly");
const plans = document.querySelectorAll(".plans");
const checkboxes = document.querySelectorAll(".Addons");
const detailsInput = document.querySelectorAll(".details-input");
const yearLabel = document.querySelector(".yearlabel");
const monthLabel = document.querySelector(".monthlabel");
const addOnsDiv = document.querySelectorAll(".add-ons");
const footerDiv = document.querySelector("footer div");
const attribute = document.querySelector(".attribution");
const changeBtn = document.querySelector(".moveTo");

//plan result
const planName = document.querySelector(".p-name");
const planPrice = document.querySelector(".p-price");

//addons result
const addOnsResult = document.querySelector(".p-add-ons");

//Total result
const totalDiv = document.querySelector(".total-div");

let phase = "bymonth";
let currentPage = 0;
let isAllvaild;
let correct;
let checkPlanValidityArray;

let sum1;
let sum2;
let sum3;
let planPriceLabel;
let addOnLabel;

let currentPlan;
let currentPlanPrice;

const monthlyItems = {
  monthyPlans: {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  },
  monthlyAddons: {
    "Online service": 1,
    "Larger storage": 2,
    "Customizable profile": 2,
  },
};

const yearlyItems = {
  yearlyPlans: {
    Arcade: 90,
    Advanced: 120,
    Pro: 150,
  },
  yearlyAddons: {
    "Online service": 10,
    "Larger storage": 20,
    "Customizable profile": 20,
  },
};

// functions
addOnsDiv.forEach((element, index) => {
  let child = document.querySelectorAll(".add-ons .add-on-check .Addons")[
    index
  ];
  let label = document.querySelectorAll(".add-ons .add-on-check label")[index];
  element.addEventListener("click", () => {
    child.click();
    addOnsCheck(child, element);
  });
  label.addEventListener("click", () => {
    child.click();
    addOnsCheck(child, element);
  });
  child.addEventListener("click", () => {
    child.click();
    addOnsCheck(child, element);
  });
});

const addOnsCheck = (child, element) => {
  child.checked
    ? (element.style.borderColor = "hsl(243, 100%, 62%)")
    : (element.style.borderColor = "hsl(228, 100%, 84%)");
};

const movefocus = () => {
  if (currentPage < 4) {
    navNums.forEach((e) => {
      e.classList.remove("active");
    });
    navNums[currentPage].classList.add("active");
  }
  steps.forEach((e) => {
    e.classList.remove("active");
  });

  steps[currentPage].classList.add("active");
};

const priceLabel = (phase) => {
  if (phase === "bymonth") {
    return "mo";
  } else {
    return "yr";
  }
};

const planLabel = (phase) => {
  return phase === "bymonth" ? "month" : "year";
};

const getPlan = (planPriceLabel) => {
  return phase === "bymonth"
    ? monthlyItems.monthyPlans[planPriceLabel]
    : yearlyItems.yearlyPlans[planPriceLabel];
};

const getAddon = (addOnLabel) => {
  return phase === "bymonth"
    ? monthlyItems.monthlyAddons[addOnLabel]
    : yearlyItems.yearlyAddons[addOnLabel];
};

const asignPlan = () => {
  plans.forEach((e) => {
    if (e.checked) {
      planPrice.textContent = "$" + getPlan(e.value) + "/" + priceLabel(phase);
      if (planPriceLabel === e.value) {
        sum1 = getPlan(e.value);
        return;
      } else {
        planPriceLabel = e.value;
        planName.textContent = `${e.value} (${planLabel(phase)}ly)`;
        sum1 = getPlan(e.value);
      }
    }
  });
};

const asignAddOns = () => {
  addOnsResult.innerHTML = "";
  sum2 = 0;
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      addOnLabel = checkbox.value;
      addOnsResult.innerHTML += `
            <div>
            <span>${checkbox.value}</span> <span class="addPrices">+$${getAddon(
        addOnLabel
      )}/${priceLabel(phase)}</span>
            </div>
            `;
      sum2 += getAddon(addOnLabel);
    }
  }
};

const totalSum = (sum3) => {
  sum3 = sum1 + sum2;

  totalDiv.innerHTML = `
        <span class="total-label">Total (per ${planLabel(
          phase
        )})</span> <span class="total-cost">$${sum3}/${priceLabel(phase)}</span>
    `;
};

const toggleVisibility = (currentPage) => {
  currentPage >= 1
    ? (prevBtn.style.visibility = "visible")
    : (prevBtn.style.visibility = "hidden");
};

function validateAll(value, type) {
  let isValid = true;
  let errorMsg = "";
  if (type === "text") {
    if (value === "") {
      isValid = false;
      errorMsg = "Name must be filled out";
    } else {
      const alphaRegex = /[a-zA-Z]$/;
      let newValue = value.trim();
      if (!alphaRegex.test(newValue)) {
        isValid = false;
        errorMsg = "Input valid name";
      }
    }
  } else if (type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
      isValid = false;
      errorMsg = "Email must be filled out";
    } else if (!emailRegex.test(value)) {
      isValid = false;
      errorMsg = "Invalid email format";
    }
  } else if (type === "tel") {
    const numericRegex = /[0-9]$/;
    if (value === "") {
      isValid = false;
      errorMsg = "Input the telephone number";
    } else if (!numericRegex.test(value)) {
      isValid = false;
      errorMsg = "Enter a valid phone number";
    }
  }
  return { isValid, errorMsg };
}

const checkInputValidity = (pass) => {
  isAllvaild = [];
  pass.forEach((element) => {
    // Find the error message span next to the input
    const errorSpan = element.parentElement.querySelector(".error-message");
    const { isValid, errorMsg } = validateAll(element.value, element.type);
    if (!isValid) {
      element.style.borderColor = "hsl(354, 84%, 57%)";
      if (errorSpan) errorSpan.textContent = errorMsg;
    } else {
      element.style.borderColor = "hsl(213, 96%, 18%)";
      if (errorSpan) errorSpan.textContent = "";
    }
    isAllvaild.push(isValid);
  });
  return isAllvaild;
};

const checkPlanSelector = () => {
  const subscriptionSelected = document.querySelector(
    'input[name="plan"]:checked'
  );
  return !subscriptionSelected ? false : true;
};

changeBtn.addEventListener("click", () => {
  currentPage = 1;
  movefocus();
});

// next and back bottons
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentPage == 1) {
    asignPlan();
  }
  if (currentPage == 2) {
    asignAddOns();
    totalSum();
    nextBtn.innerHTML = "Confirm";
  }

  if (currentPage >= 4) {
    return;
  } else {
    if (currentPage === 0) {
      checkInputValidity(detailsInput);
      if (isAllvaild.includes(false)) {
        return;
      } else {
        currentPage += 1;
        movefocus();
        toggleVisibility(currentPage);
      }
    } else if (currentPage === 1) {
      if (checkPlanSelector() === false) {
        alert("please select a plan");
        return;
      } else {
        currentPage += 1;
        movefocus();
      }
    } else if (currentPage === 3) {
      footerDiv.style.display = "none";
      attribute.style.display = "block";
      currentPage += 1;
      movefocus();
    } else {
      if (currentPage === 3) {
        nextBtn.innerHTML = "Confirm";
      }
      currentPage += 1;
      movefocus();
    }
  }
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage <= 0) {
    return;
  } else {
    currentPage -= 1;
    movefocus();
    nextBtn.innerHTML = "Next Step";
    toggleVisibility(currentPage);
  }
});

// toggle
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    phase = "byyear";
    yearLabel.style.color = "hsl(213, 96%, 18%)";
    monthLabel.style.color = "hsl(231, 11%, 63%)";
    yearly.forEach((e) => {
      e.style.display = "block";
    });
    monthly.forEach((e) => {
      e.style.display = "none";
    });
  } else {
    phase = "bymonth";
    monthLabel.style.color = "hsl(213, 96%, 18%)";
    yearLabel.style.color = "hsl(231, 11%, 63%)";
    yearly.forEach((e) => {
      e.style.display = "none";
    });
    monthly.forEach((e) => {
      e.style.display = "block";
    });
  }
});
