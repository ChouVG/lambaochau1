fetch("http://localhost/backend/students.php")
  .then((res) => res.json())
  .then((data) => {
    let ul = document.getElementById("list");
    data.forEach((sv) => {
      let li = document.createElement("li");
      li.textContent = sv.name;
      ul.appendChild(li);
    });
  });
