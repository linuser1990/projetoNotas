const pool = require('../../db')

const getAllItems = async (req, res) =>
{
    const {rows} = await pool.query('SELECT * FROM notes')
}

module.exports = 
{
    getAllItems
}