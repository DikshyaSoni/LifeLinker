document.addEventListener("DOMContentLoaded", function () {
  // Select all state and district dropdowns
  const allStateSelects = document.querySelectorAll("#state");
  const allDistrictSelects = document.querySelectorAll("#district");

  // Initialize each state/district pair
  allStateSelects.forEach((stateSelect, index) => {
    const districtSelect = allDistrictSelects[index];

    // Populate states
    Object.keys(statesAndDistricts).forEach((state) => {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });

    // Populate districts when state changes
    stateSelect.addEventListener("change", function () {
      const selectedState = this.value;

      // Clear previous districts
      districtSelect.innerHTML = '<option value="">--Select District--</option>';

      if (selectedState && statesAndDistricts[selectedState]) {
        statesAndDistricts[selectedState].forEach((district) => {
          const option = document.createElement("option");
          option.value = district;
          option.textContent = district;
          districtSelect.appendChild(option);
        });
      }
    });
  });
});
