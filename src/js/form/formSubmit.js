import refs from "../common/refs";

const hadnleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "../../ajax.php", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert("Data sent successfully :)");
        refs.form.reset();
      } else {
        alert("Error. Something went wrong :(");
      }
    }
  };
  xhr.send(formData);
};

refs.form.addEventListener("submit", hadnleSubmit);
