const config = (data) => {
  return {
    method: "post",
    url: "https://data.mongodb-api.com/app/data-lpafy/endpoint/data/v1/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.DB_APIKEY,
    },
    data: data,
  };
};

module.exports = config;
