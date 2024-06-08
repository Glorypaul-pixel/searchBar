const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const productList = document.getElementById("product-list");
  const products = document.querySelectorAll(".products");
  const pname = productList.getElementsByTagName("h2");

  for (let i = 0; i < pname.length; i++) {
    let match = products[i].getElementsByTagName("h2")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    } 
  }
};

