const empruntRepo = require("../repositories/empruntRepository");
const { Livre } = require("../models");

const emprunter = async (id_user, id_livre, date_retour_prevu) => {
  const livre = await Livre.findByPk(id_livre);
  if (!livre || !livre.disponibilite) throw new Error("Livre non disponible");

  await empruntRepo.emprunterLivre({
    id_user,
    id_livre,
    date_emprunt: new Date(),
    date_retour_prevu,
  });

  await livre.update({ disponibilite: false });
};

const rendre = async (id_user, id_livre) => {
  await empruntRepo.rendreLivre(id_user, id_livre);
  const livre = await Livre.findByPk(id_livre);
  await livre.update({ disponibilite: true });
};

module.exports = { emprunter, rendre };
