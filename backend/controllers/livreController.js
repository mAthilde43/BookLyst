const livreService = require("../services/livreService");

const getAll = async (req, res) => res.json(await livreService.getAllLivres());
const getById = async (req, res) =>
  res.json(await livreService.getLivreById(req.params.id));
const create = async (req, res) =>
  res.status(201).json(await livreService.createLivre(req.body));
const update = async (req, res) =>
  res.json(await livreService.updateLivre(req.params.id, req.body));
const remove = async (req, res) => {
  await livreService.deleteLivre(req.params.id);
  res.json({ message: "Livre supprimé" });
};

module.exports = { getAll, getById, create, update, remove };
