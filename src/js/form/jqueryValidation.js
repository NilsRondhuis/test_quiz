import $ from "jquery";

$(document).ready(() => {
  $("#form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 3,
        regex: /^[A-Za-zА-Яа-я]+$/,
      },
      lname: {
        required: true,
        minlength: 3,
        regex: /^[A-Za-zА-Яа-я]+$/,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      fname: {
        required: "Please enter your first name",
        minlength: "First name must be at least 3 characters long",
      },
      lname: {
        required: "Please enter your last name",
        minlength: "Last name must be at least 3 characters long",
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      phone: {
        required: "Please enter your phone number",
      },
    },
  });

  $.validator.addMethod(
    "regex",
    function (value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Invalid format"
  );
});
