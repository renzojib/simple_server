const http = require("http");
const url = require("url");
const cities = require("cities");

const app = http.createServer((request, response) => {
	var city, query;
	query = url.parse(request.url, true).query;
	if (query.zipCode) {
		city = cities.zip_lookup(query.zipCode).city;
	} else {
		city = "not found"
	}
	
	response.writeHead(200, {"Content-type": "text/html"});
	response.write(`<h1>The city you are in is ${city}.</h1>`)
	response.end();
});

app.listen(process.env.PORT || 3000);