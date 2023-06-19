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

        localStorage.setItem(
            "userData",
            JSON.stringify({
                userId: responseData.email,
                token: responseData.token,
            })
        );  
    }

    function salir() {
      localStorage.removeItem("userData");
    }