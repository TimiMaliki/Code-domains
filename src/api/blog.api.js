const fetchData = () => {
  return  fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-04-03&sortBy=publishedAt&apiKey=e2bc78adb3c94ceeb6341e4cc0193c61" 
    )
  };
  export {fetchData}