const pool = require('../../db')

const showNotes = async (req, res) =>
{
    res.render('./notes/index')
}

const getAllItems = async (req, res) =>
{
    const {rows} = await pool.query('SELECT * FROM notes')
    res.json(rows)
}

module.exports = {getAllItems,showNotes}

