async function test() {
    try {
        const response = await fetch(`https://www.openmpy.com/api/v1/articles`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        console.log(result)
    } catch (error) {
    }
}

test()