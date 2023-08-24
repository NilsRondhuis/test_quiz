import $ from "jquery";

$(document).ready(() => {
  $("#input-phone").on("countrychange", (e) => {
    let placeholder = e.target.placeholder;

    $("#input-phone").mask(placeholder.replace(/\d/g, "0"));
  });

  $("#input-phone").mask("000 000 0000");
});
