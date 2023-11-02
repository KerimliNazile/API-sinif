const baseUrl = "http://localhost:3000/posts"
const show = document.getElementById('show')

async function fetchData() {
    try {
        const response = await axios.get(baseUrl)
        console.log(response);
    } catch (error) {
        console.log(error);
    }


}

show.addEventListener('click', async function (params) {
    await fetchData()

}
)

