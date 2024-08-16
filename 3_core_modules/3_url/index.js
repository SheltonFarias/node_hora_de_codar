import url from "url";

const address = "https://www.meusite.com.br/catalog?produtos=cadeira";
const parsedUrl = new url.URL(address); // puxando paramentros presentes na url

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams.get("produtos"));
