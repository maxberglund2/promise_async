const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products/1"); // fetch() returns a promise, so we need to wait for it
  
    const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()
  
    console.log(country); // Columbia's data will be logged to the dev console
  };
  
  fetchData();