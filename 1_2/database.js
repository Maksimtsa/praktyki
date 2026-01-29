const db = {
    connect() {
        console.log("połączono z bazą danych");
    },
    querry(sql) {
        console.log(sql);
    },
    disconnect() {
        console.log("rozłączono z bazą danych")
    }
};

module.exports = db; 