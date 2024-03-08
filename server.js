
const express = require('express');
const bodyParser = require('body-parser');
const dataStore = require('./dataStore');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Create 
app.post('/issues', (req, res) => {
    const issue = req.body;
    dataStore.createIssue(issue); 
    console.log('Created issue:', issue);
    res.send('Issue created successfully');
});

// Read 
app.get('/issues', (req, res) => {
    console.log('Read operation');
    const issues = dataStore.getAllIssues();
});

// Update 
app.put('/issues/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedIssue = req.body;
    dataStore.updateIssue(id, updatedIssue); 
    console.log('Updated issue:', updatedIssue);
    res.send('Issue updated successfully');
});

// Delete
app.delete('/issues/:id', (req, res) => {
    const id = parseInt(req.params.id);
    dataStore.deleteIssue(id); 
    console.log('Deleted issue with id:', id);
    res.send('Issue deleted successfully');
});

app.delete('/issues', (req, res) => {
    dataStore.deleteAllIssues();
    console.log('All issues deleted');
    res.send('All issues deleted successfully');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
