

export async function signup(inName, inUsername, inEmail, inPassword) {
    try {
        const response = await fetch("http://localhost:4000/studentstash/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: inName, username: inUsername, email: inEmail, password: inPassword})
        })
    
        return response.json();
    } catch (error) {
        console.log(error)
    }
   
}
