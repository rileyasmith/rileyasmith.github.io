// Written by Riley Smith (rileyasmith) ~ 21 September 2024
// This function allows access to 'homepage.html' when the user enters the right code.
// In this case, the access code is "2208" and all other integers will be denied.

function validateInviteCode(event) {
    const inviteCode = document.querySelector('input[name="invitecode"]').value;
    if (inviteCode !== "2208", "2624") {
      alert("That invite code is incorrect. Please try again.");
      event.preventDefault();
    }
  }
