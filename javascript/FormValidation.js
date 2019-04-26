(function () {
    "use strict";

    // eventlistener declaration
    document.getElementById('searchcustomer').addEventListener('click', searchCustomerValidation);
    document.getElementById('addcustomer').addEventListener('click', addCustomerValidation);
    document.getElementById('updatecustomer').addEventListener('click', updateCustomerValidation);
    document.getElementById('deletecustomer').addEventListener('click', deleteCustomerValidation);

    // input field variables
    var customerID, firstName, surName, address, city, phoneNumber;
    var arrayList = [];

    var infoMessage;
    var form = document.getElementById('customerform');

    // $style must be 'success', 'danger', 'warning', 'info' ...
    function showAlert($infoMessage, $style) {
        if ($(".alertcontainer").find("div#alert").length != 0) {
            $(".alertcontainer").children("div").remove();
        }

        $(".alertcontainer").append("<div id='alert' class='alert alert-" + $style + " alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button></div>");
        document.getElementById('alert').innerHTML = $infoMessage;

        $(".alertcontainer").css("display", "");
    }

    function getInputs() {
        customerID = document.getElementById('customerID').value;
        firstName = document.getElementById('firstName').value;
        surName = document.getElementById('surName').value;
        address = document.getElementById('address').value;
        city = document.getElementById('city').value;
        phoneNumber = document.getElementById('phoneNumber').value;

        arrayList.push(customerID, firstName, surName, address, city, phoneNumber);
    }

    function searchCustomerValidation(event) {
        event.preventDefault();
        getInputs();
        if (!isCustomerIDValid()) {
            infoMessage = "Var god fyll i ett tiosiffrigt ID."
            //$('.parent').append("<div id='alert' class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button></div>")
            showAlert(infoMessage, 'danger');

            // document.getElementById('customerid').setCustomValidity(infoMessage);

        } else {
            // Unnecessary code because form submit refreshes and removes the alert
            infoMessage = "Success!";
            showAlert(infoMessage, 'success');

            form.submit();
        }
    }

    function addCustomerValidation(event) {
        event.preventDefault();
        getInputs();
        if (checkAllCustomerInputs() === false) {
            infoMessage = "Något av fälten är tomma, var vänlig fyll i samtliga fält.";
            showAlert(infoMessage, 'danger');
        }

        /*for (var i = 0; i<arrayList.length;i++) {
            if (arrayList[i]==="") {
                infoMessage = "Något av fälten är tomma, var vänlig fyll i samtliga fält.";
                showAlert(infoMessage, 'danger');
                
            }
        } */
        else {
            infoMessage = "En kund har lagts till!";

            form.submit();

        }
    }

    function updateCustomerValidation(event) {
        event.preventDefault();
    }

    function deleteCustomerValidation(event) {
        event.preventDefault();
    }

    function isCustomerIDValid() {
        return (customerID === "" || customerID.length != 10) ? false : true;
    }

    function checkAllCustomerInputs() {
        for (var i = 0; i < arrayList.length; i++) {
            if (arrayList[i] === "") {
                return false;

            }
        }
        return true;
    }
})();