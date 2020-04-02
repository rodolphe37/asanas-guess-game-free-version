import React, { useContext } from 'react';
import './Modal.css'
import { GAME_STATE } from './Timer-test';
import './App-remake.css';
// import { connect } from 'react-redux';

const reloadGame = () => {
  window.location.reload(false);
}



const Modal = ({ gameState, startGame, resetGame, count ,victory, score, }) => {;

  let dot = () => {
    if(score < 2) {
      return dot = "Point"
    } else {
      return dot = "Points"
    }
  }


  let color = () => {
    if(score <=0) {
      return <div className="red">Vous avez {score} {dot()}</div>
    }
    if(score <= 3150){
      return <div className="orange">Vous avez {score} {dot()}</div>
    }
    else{
      return <div className="blue" >Vous avez {score} {dot()}</div>
    }
  }

  // let stars = () => {
  //   if(score >= 2150) {
  //     return (<img src={require('../quizz-images/etoile/full-star.png')} alt=""/>)
  //   }
  //   if (score <= 1800) {
  //     return (<img src={require('../quizz-images/etoile/medium-star.png')} alt="" />)
  //   }
  //   if (score < 1200) {
  //     return (<img src={require('../quizz-images/etoile/empty-star.png')} alt="" />)
  //   }
  // }

  return (
    <div className="modal modal-sm active">
  <div className="modal-overlay" />
  <div className="modal-container">
    <div className="modal-header">
      <div className="modal-title h4"></div>
    </div>
    <div className="modal-body">
      <div className="content-modal-remake h6">
        {' '}
        { gameState === GAME_STATE.READY
          ? <div className="polaroid">
              <div className="parag">
                <h2>Devinez le nom de l'Asana de Yoga!</h2>
                <p>
                  Vous avez une illustration... <br />et quatre choix de nom !!! <br />
                  Quand la réponse est bonne le fond du panel de jeu devient vert,<br /> sinon, il devient rouge !
                </p>
                vous n'avez que 120 secondes (2 minutes),
                faites le rapidement pour avoir un meilleur score...
                <p className="orange">
                  Un indice éventuel, les bienfaits de la position apparente devant vous sont listés sur le panel gauche. et si ce n'est pas un indice... alors cela feras un bon exercice pour mémoriser les positions avec leurs noms ainsi que les info inhérentes à celles ci
                </p>
               {/* <p className="red">
                  ... Attention, Ce jeu ne se substitut pas à un professeur expérimenté, il n'a pas vocation à ça. Ce jeu est fait pour compléter votre apprentissage par le biais de jeux sur la mémoire... Toute pratique du Yoga se fait avec un avis médical positif de son médecin.
        </p>*/}
              </div>
            </div>
          : <div className="polaroid">
              <div className="parag">
                <div>{color()}</div>
              </div>
            </div>
        }
      </div>
    </div>
    <div className="modal-footer">
      <button
        className="reload"
        onClick={gameState === GAME_STATE.READY ? startGame : resetGame && reloadGame }
      >
        {gameState === GAME_STATE.READY ? 'Commencer le jeu' : 'Recommencer le Jeu'}
      </button>
    </div>
  </div>
</div>)
}
// export default connect((state) => ({state: state}))(Modal);

export default Modal;
