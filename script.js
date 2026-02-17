function calculateAge() {
  const dob = document.getElementById("dob").value;
  if (!dob) {
    alert("Select your Date of Birth");
    return;
  }

  const birth = new Date(dob);
  const now = new Date();

  const diffMs = now - birth;

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours   = Math.floor(diffMs / (1000 * 60 * 60));
  const days    = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const weeks   = Math.floor(days / 7);

  let years  = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();

  if (months < 0 || (months === 0 && now.getDate() < birth.getDate())) {
    years--;
    months += 12;
  }

  const output = `
    🧪 Yeah Science!<br><br>
    <b>${years}</b> Years<br>
    <b>${months}</b> Months<br>
    <b>${weeks}</b> Weeks<br>
    <b>${days}</b> Days<br>
    <b>${hours}</b> Hours<br>
    <b>${minutes}</b> Minutes Old<br><br>
    <i>"Yo Mr. White!"</i>
  `;

  document.getElementById("fullAge").innerHTML = output;
  document.getElementById("jesseScreen").style.display = "flex";
}
