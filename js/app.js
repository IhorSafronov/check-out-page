(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const radioButtons = document.querySelectorAll(".options__input");
    radioButtons.forEach((radioButton => {
        radioButton.addEventListener("change", handleRadioButtonChange);
    }));
    const defaultSelectedRadioButton = document.querySelector(".options__input:checked");
    if (defaultSelectedRadioButton) handleRadioButtonChange({
        target: defaultSelectedRadioButton
    });
    function handleRadioButtonChange(event) {
        const selectedRadioButton = event.target;
        const additionalInfo = selectedRadioButton.parentNode.querySelector(".additional-info");
        hideAllAdditionalInfo();
        if (selectedRadioButton.checked) {
            additionalInfo.style.opacity = 1;
            additionalInfo.style.maxHeight = additionalInfo.scrollHeight + "px";
            const link = additionalInfo.querySelector("a");
            link.addEventListener("click", (function(event) {
                event.preventDefault();
                sendDataFromForm();
            }));
        }
    }
    function hideAllAdditionalInfo() {
        const additionalInfoElements = document.querySelectorAll(".additional-info");
        additionalInfoElements.forEach((infoElement => {
            infoElement.style.opacity = 0;
            infoElement.style.maxHeight = 0;
        }));
    }
    const script_form = document.querySelector(".form-body");
    script_form.addEventListener("submit", (function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phone-number").value;
        const street = document.getElementById("street").value;
        const apartment = document.getElementById("apartment").value;
        const state = document.getElementById("state").value;
        const city = document.getElementById("city").value;
        const country = document.getElementById("country").value;
        const postalCode = document.getElementById("postal-code").value;
        const formData = {
            name,
            surname,
            email,
            phoneNumber,
            street,
            apartment,
            state,
            city,
            country,
            postalCode
        };
        console.log(formData);
    }));
    function sendDataFromForm() {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phone-number").value;
        const street = document.getElementById("street").value;
        const apartment = document.getElementById("apartment").value;
        const state = document.getElementById("state").value;
        const city = document.getElementById("city").value;
        const country = document.getElementById("country").value;
        const postalCode = document.getElementById("postal-code").value;
        const formData = {
            name,
            surname,
            email,
            phoneNumber,
            street,
            apartment,
            state,
            city,
            country,
            postalCode
        };
        console.log(formData);
    }
    window["FLS"] = true;
    isWebp();
})();