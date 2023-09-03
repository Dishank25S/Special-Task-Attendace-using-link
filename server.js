// server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const db = new sqlite3.Database(path.join(__dirname, 'attendance.db'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/attendance', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  const timestamp = new Date().toISOString();

  db.run('INSERT INTO attendance (name, timestamp) VALUES (?, ?)', [name, timestamp], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error recording attendance.' });
    }

    res.status(201).json({ message: 'Attendance recorded successfully.' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
