export async function fetchAllProducts() {
  try {
    const response = await fetch("http://localhost:8080/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data)
    return { data };
  } catch (error) {
    console.log("Error fetching products");
    throw error;
  }
}
export async function fetchProductsByFilters(filter) {
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  try {
    const response = await fetch(
      `http://localhost:8080/products?` + queryString
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data)
    return { data };
  } catch (error) {
    console.log("Error fetching products");
    throw error;
  }
}
  