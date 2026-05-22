const amountInput = document.querySelector("#amount");
const donationLink = document.querySelector("#donation-link");
const amountButtons = document.querySelectorAll("[data-amount]");

function updateDonationLink() {
  const amount = amountInput.value.trim();
  const subject = "Donation to Early Signs Foundation";
  const body = amount
    ? `Hello, I would like to donate $${amount} to Early Signs Foundation.`
    : "Hello, I would like to donate to Early Signs Foundation.";

  donationLink.href = `mailto:hello@earlysignsfoundation.org?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    amountButtons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    amountInput.value = button.dataset.amount;
    updateDonationLink();
  });
});

amountInput.addEventListener("input", () => {
  amountButtons.forEach((item) => item.classList.remove("is-selected"));
  updateDonationLink();
});

updateDonationLink();
