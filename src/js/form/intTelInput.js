import refs from "../common/refs";
import intlTelInput from "intl-tel-input";

intlTelInput(refs.inputPhone, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  preferredCountries: ["ua"],
  onlyCountries: ["ua", "us", "gb"],
});
