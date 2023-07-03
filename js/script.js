// Your JS code here
var subTypeElement = document.querySelector("#subscription");

var subDurationElement = document.querySelector("#months");

var result = document.querySelector(".result");

var subType = "basic";

var subDuration = Number(1);

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function (e) {
  var monthlyCost = Number(5);
  if (subType === "standard") {
    monthlyCost = Number(7);
  } else if (subType === "premium") {
    monthlyCost = Number(10);
  }
  if (subDuration === 12) {
    var total = Number(subDuration * monthlyCost * 0.9).toFixed(2);
  } else {
    total = Number(subDuration * monthlyCost);
  }

  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
