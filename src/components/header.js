import React from 'react';
import '../css/styles.css'


// il s'agit de la composante du header du forum

const Header = (props) => {

  return (
      <header>
          <div 
          className="logo">
          Bienvenue au Forum du Test de WiFirst
          </div>
          <h3 className="colorecherche">Rechercher un Post par son <strong>Titre</strong></h3>
          <input 
            type="text" 
            onChange={props.keywords}
            />
      </header>
  )

}








export default  Header;