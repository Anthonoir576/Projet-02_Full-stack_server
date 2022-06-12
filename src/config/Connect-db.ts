
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ######################################################## 
const mongoose = require("mongoose");
require("dotenv").config();
//- --------------------------------------------------------
//- ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ######################################################## 
export const connectedDB = (variable?: any) => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_GROUP}.4lmhv.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((error?: any) =>
      console.log(
        "Connexion à MongoDB échouée ! Pourquoi ? => " + "[ ERREUR : " + " => " + error + " ]"
      )
    );
};

//~ --------------------------------------------------------
//~ ########################################################
