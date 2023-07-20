// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
              

//startsWith filters and finds the specified string.
 if( url.startsWith ("http://")){
    //substring gets a string and returns a new string based on where its told to extract from
    url = url.substring("http://".length);
 } else if (url.startsWith ("https://")){
    url= url.substring("https://".length);
 }

 if(url.startsWith ("www.")){
    url= url.substring("www.".length)
 }
// lastly url.split allows us to split from the "."
 let domain= url.split(".")[0]
    return domain


}

let url = "http://github.com/carbonfive/raygun";

console.log(domainName(url));