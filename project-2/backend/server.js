import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready')
});

// get a list of five jokes 

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Programmer life',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs.'
        },
        {
            id: 4,
            title: 'Debugging',
            content: 'There are only 10 types of people: those who understand binary and those who don\'t.'
        },
        {
            id: 5,
            title: 'Frontend',
            content: 'Why was the CSS file sad? It had too many issues with its parent.'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});