const pool = require('../../db')
const bcrypt = require('bcrypt')

const getAllItems = async (req, res) =>
{
    const {rows} = await pool.query('SELECT * FROM notes')
    res.render('/user/index')
}

const addItem = async (req, res) => 
{
    const { nome,email,senha } = req.body
 
    const hashedPassword = await bcrypt.hash(senha, 10); // Gera o hash da senha
  
    try {
      const { rows } = await pool.query('INSERT INTO users (nome,email,senha) VALUES ($1,$2,$3) RETURNING *', [nome,email, hashedPassword ])
      res.redirect('/home')
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o cliente' })
    }
}

module.exports = 
{
    getAllItems,
    addItem
}