const getBlog  = () => {
 return   fetch(
        `https://newsapi.org/v2/everything?apiKey=e2bc78adb3c94ceeb6341e4cc0193c61&id=4&qInTitle=${removeSnakeCase(
          param.title
        )}`
      )
}

export {getBlog}