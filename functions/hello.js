exports.handler = async function (event, context) {
  return {
    statusCode : 200,
    body : JSON.stringify({
      name:'KYS',
      age:85,
      email:'KYS@gmail.com'
    })
  }
}