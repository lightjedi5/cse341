const fs = require('fs')

const requestHandler = (request, response) => {
    const url = request.url
    const method = request.method

    response.writeHead(200, {'Content-type':'text/html'})
    if(url === '/'){
        //found a solution online to load html file instead of writing with res.write() 
        //https://vegibit.com/render-html-in-node-js/
        fs.readFile('./index.html', null, function(error, data){
            if(error){
                response.writeHead(404)
                response.write("File not found!")
            }
            else{
                response.write(data)
            }
        })
        //return response.end()
    }

    if(url === '/output' && method === 'POST'){
        const body = []
        //stores the post data to body
        request.on('data', (chunk) => {
            body.push(chunk)
        })

        request.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const userName = parseBody.split('&')[0].split('=')[1]
            const num1 = parseBody.split('&')[1].split('=')[1]

            let formData = {
                name: userName,
                number: num1
            }
            let data = JSON.stringify(formData)
            fs.writeFileSync('formData.json', data)

            response.write("<!--Unable to get an ajax request to work--> <!DOCTYPE html><html lang='en'><head>    <meta charset='UTF-8'>    <meta name='viewport' content='width=device-width, initial-scale=1.0'>    <title>Output</title></head><body>    <h1>Results        <br>==============    </h1>    <div id='display'>")
            response.write(`Your name is ${userName} and your number is ${num1}`)
            response.write("<!--        <script>            var xmlhttp = new XMLHttpRequest();            xmlhttp.onreadystatechange = function() {                 if (this.readyState == 4 && this.status == 200) {                    var myObj = JSON.parse(this.responseText);                    document.getElementById('display').innerHTML = myObj.name;                    console.log('made into the if statement');                 }                 console.log('Did not make it to the if statement');            };            xmlhttp.open('POST', ''./formData.json', true);            xmlhttp.send();        </script>    -->    </div></body></html>")
        })
        
    }
}

module.exports = requestHandler