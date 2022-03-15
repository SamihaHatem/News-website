/* //test
const newsApi = async() => {

    try {
        const address = 'http://localhost:3000'
        const req = await fetch('http://localhost:3000/articles')
        const data = await req.json()
        if (data.error) {
            const div = document.getElementById('array-id').remove()
            return console.log('client server error')
        }

        //console.log("******************************")
        //console.log(data)
    } catch (error) {
        console.log(error)
    }
}


newsApi() */