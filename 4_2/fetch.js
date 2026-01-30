function fetchData(url, onSuccess, onError) {
    setTimeout(() => {
        if (url.includes("error")) {
            onError("Błąd!");
        }
        else {
            onSuccess("Success!");
        }
    }, 1000);
}

fetchData("api/error",
    (data) => console.log(data),
    (err) => console.log(err)
);
