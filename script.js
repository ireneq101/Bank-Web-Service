"use strict";

// DATA
const account1 = {
  owner: "Irene Omoregbee",
  transactions: [200, -400, 3000, -4600, 27000, 3600, 1300, -8700],
  interest: 1.2, //%
  pin: 1111,
  email: "irene@gmail.com",

  transactionsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2025-04-06T14:18:46.235Z",
    "2025-04-09T16:33:06.386Z",
    "2025-04-10T14:43:26.374Z",
    "2025-04-11T18:49:59.371Z",
    "2025-04-12T12:01:20.894Z",
    "2025-04-13T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account2 = {
  owner: "Mary Jane",
  transactions: [1400, -700, 5600, -4600, -2000, 600, -1800, 5700],
  interest: 1.5, //%
  pin: 2222,
  email: "mary@gmail.com",

  transactionsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "pt-PT",
};

const account3 = {
  owner: "Avarage Joe",
  transactions: [-4300, 6800, -800, -9600, 500, -700, -1300, -8700],
  interest: 1, //%
  pin: 3333,
  email: "matthew@gmail.com",

  transactionsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "EUR",
  locale: "en-US",
};

const account4 = {
  owner: "Bryne Johnson",
  transactions: [800, 9900, 4000, 700, 7800],
  interest: 0.7, //%
  pin: 4444,
  email: "bryne@gmail.com",

  transactionsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "NAIRA",
  locale: "en-US",
};

const account5 = {
  owner: "Eddie Tina",
  transactions: [6000, -5600, -80, -800, -300, -400],
  interest: 2, //%
  pin: 5555,
  email: "eddie@gmail.com",

  transactionsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "NAIRA",
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4, account5];

// HEADER / WELCOME MESSAGE
const loginTimer = document.querySelector(".timer");
const logoutTimerMessage = document.querySelector(".logout-timer");
const loginMessage = document.querySelector(".login-message");
const logoutMessage = document.querySelector(".logout-message");
const loginAcc = document.querySelector(".accounts-login");
const loginAccLabel = document.querySelector(".account-label");
const switchAccLabel = document.querySelector(".accounts-btn");
const switchBtn = document.querySelector(".switch-btn");
const switchLabel = document.querySelector(".switch-label");

// LOGINS
const loginAccountsOwner = document.querySelector(".form__btn__login");
const loginInputName = document.querySelector(".login-input-name");
const loginInputPin = document.querySelector(".login-input-pin");
const loginBtn = document.querySelector(".login-btn");

// SWITCH-ACCOUNTS
const switchAcc = document.querySelector(".switch-account");
const switchInputName = document.querySelector(".switch-input-name");
const switchInputPin = document.querySelector(".switch-input-pin");
const switchAccBtn = document.querySelector(".form__btn__switch");

// BODY
const main = document.querySelector(".hidden");
const body = document.querySelector("body");
const hamburgerMenu = document.querySelector(".hamburger-menu");

// HAMBURGER
const profileList = document.querySelector(".profile-list");
const transferList = document.querySelector(".transfer-list");
const requestList = document.querySelector(".request-list");
const closeList = document.querySelector(".close-list");
const logoutList = document.querySelector(".logout-list");
const accountsBtn = document.querySelector(".accounts-btn");

// OVERLAYS
const loginContainer = document.querySelector(".login-account");
const profileContainer = document.querySelector(".profile-container");
const transferContainer = document.querySelector(".transfer-container");
const loanContainer = document.querySelector(".loan-container");
const closeContainer = document.querySelector(".close-account");
const overlayContainer = document.querySelector(".overlay");

// BALANCE
const labelBalance = document.querySelector(".balance");
const labelBalanceDate = document.querySelector(".date");
const labelBalancevalue = document.querySelector(".balance-value");
const labelDate = document.querySelector(".date");

// PROFILE
const profileName = document.querySelector(".profile-name");
const profilePin = document.querySelector(".profile-pin");
const profileEmail = document.querySelector(".profile-email")

// LOAN
const loanInput = document.querySelector(".request-input-amount");
const loanBtn = document.querySelector(".form__btn--loan");

// TRANSACTIONS
const labelTransactions = document.querySelector(".transactions");
const labelTransferTo = document.querySelector(".transfer-input-to");
const labelTransferAmount = document.querySelector(".transfer-input-amount");
const labelTransferBtn = document.querySelector(".form__btn--transfer");
const transactionDate = document.querySelector(".transaction-date");
const sortBtn = document.querySelector(".transaction-sort");

// SUMMARY
const sumIncomeValue = document.querySelector(".summary-income-value");
const sumOutcomeValue = document.querySelector(".summary-outcome-value");
const sumInterestValue = document.querySelector(".summary-interest-value");

// CLOSE ACCOUNT
const closeAccName = document.querySelector(".close-input-name");
const closeAccPin = document.querySelector(".close-input-pin");
const closeAccBtn = document.querySelector(".form__btn--transfer");

// OVERLAYS / EVENTLISTENER
overlayContainer.addEventListener("click", function () {
  overlayContainer.classList.add("profile-info");
  loginContainer.style.opacity = 0;
  switchAcc.style.opacity = 0;
  profileContainer.style.opacity = 0;
  closeContainer.style.opacity = 0;
  loanContainer.style.opacity = 0;
  transferContainer.style.opacity = 0;
});

loginBtn.addEventListener("click", function () {
  overlayContainer.classList.remove("profile-info");
  loginContainer.style.opacity = 1;
  loginContainer.style.display = "block";
});

switchBtn.addEventListener("click", function () {
  overlayContainer.classList.remove("profile-info");
  switchAcc.style.opacity = 1;
  switchAcc.style.display = "block";
});

profileList.addEventListener("click", function () {
  overlayContainer.classList.remove("profile-info");
  profileContainer.style.opacity = 1;
  profileContainer.style.display = "block";
});

transferList.addEventListener("click", function () {
  overlayContainer.classList.remove("profile-info");
  transferContainer.style.opacity = 1;
  transferContainer.style.display = "block";
});

requestList.addEventListener("click", function () {
  overlayContainer.classList.remove("profile-info");
  loanContainer.style.opacity = 1;
  loanContainer.style.display = "block";
});

closeList.addEventListener("click", function () {
  overlayContainer.classList.remove("profile-info");
  closeContainer.style.opacity = 1;
  closeContainer.style.display = "block";
});

logoutList.addEventListener("click", function () {
  // main.style.opacity = 0;
  // hamburgerMenu.style.opacity = 0;
  // accountsBtn.style.display = "none";
  // loginAcc.style.display = "flex";
  // logoutMessage.style.opacity = 1;
  // loginMessage.style.opacity = 1;
  logoutTimerMessage.style.display = "none";
  loginMessage.textContent = "Login to get started";
  loginAcc.style.display = "flex";
  switchAccLabel.style.display = "none";
  main.style.opacity = 0;
  main.style.display = "none";
  main.style.transition = "opacity 0.5s ease-in-out";
  hamburgerMenu.style.display = "none";
  hamburgerMenu.style.opacity = 0;
  body.style.display = "grid";
  body.style.gridTemplateColumns = "none";
});

loginAccountsOwner.addEventListener("click", function () {
  logoutTimerMessage.style.display = "block";
  loginContainer.style.opacity = 0;
  loginContainer.style.display = "none";
  overlayContainer.classList.add("profile-info");
});

switchAccBtn.addEventListener("click", function () {
  switchAcc.style.opacity = 0;
  switchAcc.style.display = "none";
  overlayContainer.classList.add("profile-info");
});

// FUNCTION
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatcur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

// TRANSACTIONS
const displayTransactions = function (accts, sort = false) {
  labelTransactions.innerHTML = "";

  const sorting = sort
    ? accts.transactions.slice().sort((a, b) => a - b)
    : accts.transactions;

  sorting.forEach(function (trans, i) {
    const type = trans > 0 ? "deposit" : "withdrawal";

    const date = new Date(accts.transactionsDates[i]);
    const displayDate = formatMovementDate(date, accts.locale);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // const displayDate = `${day}/${month}/${year}`;

    const formattedTrans = formatcur(trans, accts.locale, accts.currency);

    const html = `
      <div class="transactions-row">
        <div class="transaction-type transaction-type-${type}">${i + 1} ${type}
          </div>
          <div class="transaction-date">${displayDate}</div>
        <div class="transaction-value">${formattedTrans}</div>
      </div>`;

    labelTransactions.insertAdjacentHTML("afterbegin", html);
  });
};
// displayTransactions(account1.transactions);
// const transaction = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayBalance = function (accts) {
  accts.balance = accts.transactions.reduce((acc, trans) => acc + trans, 0);
  labelBalancevalue.textContent = formatcur(
    accts.balance,
    accts.locale,
    accts.currency
  );
};
// displayBalance(account1.transactions);

const displaySummary = function (accts) {
  const incomes = accts.transactions
    .filter((trans) => trans > 0)
    .reduce((acc, trans) => acc + trans, 0);
  sumIncomeValue.textContent = formatcur(incomes, accts.locale, accts.currency);

  const outcome = accts.transactions
    .filter((trans) => trans < 0)
    .reduce((acc, trans) => acc + trans, 0);
  sumOutcomeValue.textContent = formatcur(
    Math.abs(outcome),
    accts.locale,
    accts.currency
  );

  const interest = accts.transactions
    .filter((trans) => trans > 0)
    .map((deposit) => (deposit * accts.interest) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  sumInterestValue.textContent = formatcur(
    interest,
    accts.locale,
    accts.currency
  );
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsername(accounts);

// profileEmail.innerHTML = currentAccount.email;

const upDateUI = function (accont) {
  // DISPLAY TRANSACTIONS
  displayTransactions(accont);

  // DISPLAY BALANCE
  displayBalance(accont);

  // DISPLAY SUMMARY
  displaySummary(accont);
};

const logoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    loginTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      loginMessage.textContent = "You are currently logged out";
      loginAcc.style.display = "flex";
      switchAccLabel.style.display = "none";
      main.style.opacity = 0;
      main.style.display = "none";
      main.style.transition = "opacity 0.5s ease-in-out";
      hamburgerMenu.style.display = "none";
      hamburgerMenu.style.opacity = 0;
      body.style.display = "grid";
      body.style.gridTemplateColumns = "none";
      logoutTimerMessage.style.display = "none";
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

 // Function to update profile display
    function updateProfile(index) {
      const account = accounts[index];
      profileName.textContent = account.owner;
      profilePin.textContent = account.pin;
      profileEmail.textContent = account.email;
    }

// EVENT HANDLER
let currentAccount, timer;

loginAccountsOwner.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === loginInputName.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +loginInputPin.value) {
    // DISPLAY UI AND MESSAGE
    loginMessage.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    main.style.opacity = 1;
    main.style.transition = "opacity 0.3s ease-in-out";
    hamburgerMenu.style.opacity = 1;
    main.style.display = "block";
    body.style.display = "grid";
    body.style.gridTemplateColumns = "82% 18%";
    hamburgerMenu.style.display = "block";
    loginAcc.style.display = "none";
    switchAccLabel.style.display = "flex";
    logoutTimerMessage.style.display = "block";

    // CURRENT DATE AND TIME
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "short",
      year: "numeric",
      weekday: "short",
    };

    //GETTING IT FROM THE USER'S BROWSER
    // const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // CLEAR INPUT FIELD
    loginInputName.value = loginInputPin.value = "";
    loginInputName.blur();
    loginInputPin.blur();

    //TIMER
    if (timer) clearInterval(timer);
    timer = logoutTimer();

    // UPDATE UI
    upDateUI(currentAccount);

    // Initial display
    updateProfile(0);
  }
});

switchAccBtn.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === switchInputName.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +switchInputPin.value) {
    // DISPLAY UI AND MESSAGE
    loginMessage.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    // main.style.opacity = 1;
    // main.style.transition = "opacity 0.3s ease-in-out";
    // hamburgerMenu.style.opacity = 1;
    // main.style.display = "block";
    // body.style.display = "grid";
    // body.style.gridTemplateColumns = "82% 18%";
    // hamburgerMenu.style.display = "block";
    // loginAcc.style.display = "none";
    // switchAccLabel.style.display = "flex";

    // CLEAR INPUT FIELD
    switchInputName.value = switchInputPin.value = "";
    switchInputName.blur();
    switchInputPin.blur();

    upDateUI(currentAccount);
  }
});

labelTransferBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = +labelTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === labelTransferTo.value
  );

  labelTransferAmount.value = labelTransferTo.value = "";
  labelTransferAmount.blur();
  labelTransferTo.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // DOING TRANSFER
    currentAccount.transactions.push(-amount);
    receiverAcc.transactions.push(amount);

    // TRANSFER DATE
    currentAccount.transactionsDates.push(new Date().toISOString());
    receiverAcc.transactionsDates.push(new Date().toISOString());

    // UPDATE UI
    upDateUI(currentAccount);

    // RESET TIMER
    clearInterval(timer);
    timer = logoutTimer();
  }
});

loanBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(loanInput.value);

  if (
    amount > 0 &&
    currentAccount.transactions.some((acc) => acc >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add amount
      currentAccount.transactions.push(amount);

      // LOAN DATE
      currentAccount.transactionsDates.push(new Date().toISOString());

      // Update UI
      upDateUI(currentAccount);

      // RESET TIMER
      clearInterval(timer);
      timer = logoutTimer();
    }, 3000);
  }
  loanInput.value = "";
});

let sorted = false;
sortBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayTransactions(currentAccount.transactions, !sorted);
  sorted = !sorted;
});

closeAccBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    closeAccName.value === currentAccount.username &&
    +closeAccPin.value === currentAccount.pin
  ) {
    const elementIndex = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(elementIndex);

    // DELETE ACCOUNT
    accounts.splice(elementIndex, 1);

    clearInterval(timer);

    // HIDE UI
    // main.style.opacity = 0;
    // main.style.display = "none";
    // hamburgerMenu.style.opacity = 0;
    // hamburgerMenu.style.display = "none";
    // main.style.transition = "opacity 0.3s ease-in-out";
  }
  // labelTransferAmount.value = labelTransferTo.value = "";
});

// SETTIMEOUT
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log("waiting");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

//SETINTERVAL
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
