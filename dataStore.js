let issues = [
    { id: 1, title: 'Issue 1', description: 'Description 1' },
    { id: 2, title: 'Issue 2', description: 'Description 2' }
];

function getAllIssues() {
    return issues;
}

function getIssueById(id) {
    return issues.find(issue => issue.id === id);
}

function createIssue(issue) {
    issues.push(issue);
}

function updateIssue(id, updatedIssue) {
    issues = issues.map(issue => issue.id === id ? updatedIssue : issue);
}

function deleteIssue(id) {
    issues = issues.filter(issue => issue.id !== id);
}

function deleteAllIssues() {
    issues = [];
}

module.exports = { getAllIssues, getIssueById, createIssue, updateIssue, deleteIssue, deleteAllIssues};
