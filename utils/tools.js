export const fetchData = async () => {
   const data = await fetch("https://dummyjson.com/products").then(
      res => res.json()
   ).catch(
      error => console.log(error)
   );

   const filteredData = data.products.filter(item => item.title == "Handcraft Chinese style" );

   return filteredData;
}
