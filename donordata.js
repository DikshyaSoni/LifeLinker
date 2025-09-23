document.addEventListener("DOMContentLoaded", function () {
  const donorForm = document.getElementById("donorSearchForm");
  const stateSelect = document.getElementById("state");
  const districtSelect = document.getElementById("district");
  const nameInputEl = document.getElementById("searchName");
  const bloodSelect = document.getElementById("searchBloodType");
  const tbody = document.querySelector("#resultsTable tbody");

  donorForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const stateInput = stateSelect.value.trim().toLowerCase();
    const districtInput = districtSelect.value.trim().toLowerCase();
    const nameInput = nameInputEl.value.trim().toLowerCase();
    const bloodTypeInput = bloodSelect.value.trim().toLowerCase();

    const filteredDonors = donationRecords.filter((donor) => {
      const donorState = (donor.state || "").trim().toLowerCase();
      const donorDistrict = (donor.district || "").trim().toLowerCase();
      const donorName = (donor.name || "").trim().toLowerCase();
      const donorBlood = (donor.bloodType || "").trim().toLowerCase();

      // Only include if state matches (if state selected)
      if (stateInput && donorState !== stateInput) return false;

      // Only include if district matches (if district selected)
      if (districtInput && donorDistrict !== districtInput) return false;

      // Name search
      if (nameInput && !donorName.includes(nameInput)) return false;

      // Blood type
      if (bloodTypeInput && bloodTypeInput !== "all" && donorBlood !== bloodTypeInput) return false;

      return true;
    });

    // Render results
    tbody.innerHTML = "";

    if (filteredDonors.length === 0) {
      tbody.innerHTML =
        "<tr><td colspan='6' style='text-align:center;'>No donors found for selected area.</td></tr>";
    } else {
      filteredDonors.forEach((donor) => {
        const row = `
          <tr>
            <td>${donor.name || "N/A"}</td>
            <td>${donor.state || "N/A"}</td>
            <td>${donor.district || "N/A"}</td>
            <td>${donor.bloodType || "N/A"}</td>
            <td>${donor.lastDonation || "Unknown"}</td>
            <td>${donor.eligibility || "Unknown"}</td>
          </tr>
        `;
        tbody.insertAdjacentHTML("beforeend", row);
      });
    }
  });
});
