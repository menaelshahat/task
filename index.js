const express = require('express');
const app = express();
const port = 3000;
const host = '127.0.0.1';

app.get('/', (req, res) => {
    let page = '<a href = "/students">Students</a>';
    return res.send(page);
});

app.get('/students', (req, res) => {
    const st = [
        {
            name: "Zeyad",
            age: 20, 
            email: "zeyad@gmail.com"
        },
        {
            name: "Yousef",
            age: 21, 
            email: "yousef@gmail.com"
        },
        {
            name: "Abdo",
            age: 21, 
            email: "abdo@gmail.com"
        }
    ];
    let page = '';
    st.forEach(element => {
        page += '<h2>' + element.name + '</h2>';
    });
    res.send(page);
});

app.listen(port, host, () => {
    console.log('running on http://' + host + ':' + port);
});