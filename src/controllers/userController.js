const pool = require('../../db')

const getAllItems = async (req, res) =>
{
    const {rows} = await pool.query('SELECT * FROM notes')
    res.render('/user/index')
}

const addItem = async (req, res) => 
{

}

module.exports = 
{
    getAllItems,
    addItem
}