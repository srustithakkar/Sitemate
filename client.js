const axios = require('axios');

const API_URL = 'http://localhost:3000'; 

// create
async function createIssue(issue) {
    try {
        const response = await axios.post(`${API_URL}/issues`, issue);
        console.log(response.data);
    } catch (error) {
        console.error('Error creating issue:', error.message);
    }
}

// read 
async function getIssues() {
    try {
        const response = await axios.get(`${API_URL}/issues`);
        console.log('All issues:', response.data);
    } catch (error) {
        console.error('Error fetching issues:', error.message);
    }
}

//  update
async function updateIssue(id, updatedIssue) {
    try {
        const response = await axios.put(`${API_URL}/issues/${id}`, updatedIssue);
        console.log(response.data);
    } catch (error) {
        console.error('Error updating issue:', error.message);
    }
}

//  delete
async function deleteIssue(id) {
    try {
        const response = await axios.delete(`${API_URL}/issues/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error deleting issue:', error.message);
    }
}

// delete all 
async function deleteAllIssues() {
    try {
        const response = await axios.delete(`${API_URL}/issues`);
        console.log(response.data);
    } catch (error) {
        console.error('Error deleting all issues:', error.message);
    }
}


const newIssue = { id: 3, title: 'New Issue', description: 'New Description' };
getIssues();
createIssue(newIssue);
updateIssue(3, { title: 'Updated Issue', description: 'Updated Description' });
deleteIssue(3);
deleteAllIssues();

