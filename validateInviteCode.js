function validateInviteCode(event) {
    const inviteCode = document.querySelector('input[name="invitecode"]').value;
    if (inviteCode !== "2208") {
      alert("That invite code is incorrect. Please try again.");
      event.preventDefault();
    }
  }