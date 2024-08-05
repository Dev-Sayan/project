document.addEventListener("DOMContentLoaded", function() {
    const cityList = document.querySelectorAll(".city-list li");
    const departmentList = document.querySelectorAll(".department-list li");
    const doctorList = document.querySelectorAll(".doctor-card");
    const selectedCityElement = document.getElementById("selected-city");
    const selectedDepartmentElement = document.getElementById("selected-department");

    cityList.forEach(city => {
        city.addEventListener("click", function() {
            const selectedCity = this.getAttribute("data-city");

            // Update the selected city text
            selectedCityElement.textContent = this.textContent;

            // Show relevant departments and hide others
            departmentList.forEach(department => {
                if (department.classList.contains(selectedCity)) {
                    department.style.display = "inline-block";
                } else {
                    department.style.display = "none";
                }
            });

            // Clear doctor list
            doctorList.forEach(doctor => {
                doctor.classList.remove("show");
            });

            // Reset selected department text
            selectedDepartmentElement.textContent = "Select a department";
        });
    });

    departmentList.forEach(department => {
        department.addEventListener("click", function() {
            const selectedDepartment = this.textContent.toLowerCase().replace(/ /g, '-');
            const selectedCity = selectedCityElement.textContent.toLowerCase().replace(/ /g, '-');

            // Update the selected department text
            selectedDepartmentElement.textContent = this.textContent;

            // Show relevant doctors and hide others
            doctorList.forEach(doctor => {
                if (doctor.classList.contains(selectedCity) && doctor.classList.contains(selectedDepartment)) {
                    doctor.classList.add("show");
                } else {
                    doctor.classList.remove("show");
                }
            });
        });
    });
});
