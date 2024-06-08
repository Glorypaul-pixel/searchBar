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

const style = document.createElement("style");
style.textContent = `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(50, 18, 81);
  margin: 2rem;
  /* color: white; */
}

  .products {
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
  .search {
    display: flex;
    border: 2px solid grey;
    align-items: center;
    padding: 0 0 0 1rem;
    border-radius: 5px;
  }
  input {
    padding: 0.8rem 8rem 0.8rem 1rem;
    border: none;
    outline: none;
  }
  .products img {
    width: 30%;
    padding: 1rem 1rem 0 0;
  }
  .cloth {
    background-color: white;
    width: 35%;
    height: 90vh;
    overflow: scroll;
    margin-top: 1rem;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 1rem;
  }
  .cloth::-webkit-scrollbar {
    display: none;
  }
  h2 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.8rem;
  }
  
`;
document.head.append(style);
