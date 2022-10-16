const connection = require('../connection');

const getAllActors = async (req, res) => {
  try {
  const [query] = await connection.execute(`SELECT * FROM sakila.actor`);
  return res.status(200).json(query);
  } catch (error) {
    return res.status(200).json({ message: `Ocorreu um erro: ${error.message}` });
  }
}

const getActorsById = async (id) => {
  const [query] = await connection.execute(`SELECT * FROM sakila.actor WHERE actor_id = ?`, [id]);
  return query;
}

const registerActor = async (req, res) => {
  try {
    const { first_name, last_name } = req.body;
    const [query] = await connection
    .execute(
      `INSERT INTO sakila.actor
      (first_name, last_name)
      VALUES (?, ? )`,
      [first_name, last_name]
    );
    const [idItem] = await getActorsById(query.insertId);
    if (idItem) {
      return res.status(200).json(idItem);
    } else {
      return res.status(200).json({ message: `Não foi possível realizar o cadastro. Revise as informações prestadas e tente novamente.` });
    }
    } catch (error) {
      return res.status(200).json({ message: `Ocorreu um erro: ${error.message}` });
    }
}

const updateActor = async (req, res) => {
  try {
    const { first_name, last_name, id } = req.body;
    const [item] = await getActorsById(id);
    if (!item) {
      return res.status(200).json({ message: "Não foi encontrado um usuário com este ID" });
    }
    await connection.execute(`UPDATE sakila.actor
      SET first_name = ?, last_name = ?
      WHERE actor_id = ?;`, [first_name, last_name, id]);
      return res.status(200).json(item);
  } catch (error) {
    return res.status(200).json({ message: `Ocorreu um erro: ${error.message}` });
  }
}

const deleteActor = async (req, res) => {
  try {
    const { id } = req.params;
    const [item] = await getActorsById(id);
    if (!item) {
      return res.status(200).json({ message: "Não foi encontrado um usuário com este ID" });
    }
    await connection.execute(`DELETE FROM sakila.film_actor WHERE actor_id = ?`, [id]);
    await connection.execute(`DELETE FROM sakila.actor
      WHERE actor_id = ?;`, [id]);
    return res.status(200).json({ message: `Usuário de id ${id} apagado com sucesso` });
  } catch (error) {
    return res.status(200).json({ message: `Ocorreu um erro: ${error.message}` });
  }
}

module.exports = { getAllActors, registerActor, updateActor, deleteActor };