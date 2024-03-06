import './Commentaires.css';

function Commentaires(props) {

    function setCommentaire(e) {
        e.preventDefault();
        const commentaire = e.target.commentaire.value;
        props.handleCommentaire(commentaire);
    }

    return ( 
        <form onSubmit={setCommentaire}>
            <textarea name="commentaire" placeholder='Ajouter votre commentaire'></textarea>
            <button>Soumettre</button>
        </form>
    )
}

export default Commentaires;