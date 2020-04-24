const fs = require('fs')

const requestHandler = (request, response) => {
    const url = request.url
    const method = request.method
    const activities = ["Dungeoneer","Drink","Sleep"]
    if(url === '/'){
        response.write('<html><header><title>Greetings Adventurer</title></header><body><h1>Greetings Adventurer!</h1></body></html>')
        return response.end()
    }
    if(url === "/activities"){
    
        response.write("<html>")
        response.write("<header><title>Activities</title></header>")
        response.write("<body>")
        response.write("<ul>")

        activities.forEach(element => {
            response.write(`<li>${element}</li>`) //array that prints the item with a list tag
        });

        response.write("</ul>")
        response.write("<form action='/add-activity' method ='POST'><input type='text' name='newActivity'>")
        response.write("<button type='submit'>Add Activity</button>")
        //response.write("<input type='number' name='num1'><br><input type='number' name='num2'>") 
        response.write("</form>") 
        response.write("</body>")
        response.write("</html>")
        
        return response.end()
    }
    if(url === "/add-activity" && method === "POST"){
        const text = []
        request.on('data', (chunk) => {
            text.push(chunk) //event listener for POST
        })
        request.on('end', () => {
            const parsedText = Buffer.concat(text).toString()
            newText = parsedText.split('=')[1]
            activities.push(newText) 
            console.log(newText)
            console.log(activities)
            fs.writeFile('activites.txt', newText, (error) => {
                response.writeHead(302, {'Location': request.headers['host'] + "/"})
                return response.end()
            })
        })
        response.writeHead(302, {'Location': request.headers['host'] +'/activites'}) //redirects to activities page
        response.end()
        
    }
}

module.exports = requestHandler