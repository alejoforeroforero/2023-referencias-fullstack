    async function logearse(email, password) {
    const urlLogin = `http://localhost:4100/login`;

    const response = await fetch(urlLogin, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email: email,
        password: password,
        }),
    });
    const responseData = await response.json();

    }