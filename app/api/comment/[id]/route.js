import { connectToDB } from '../../../../utils/database';
import Prompt from '../../../../models/prompt';

export const POST = async (req, {params}) => {

  const { username, userImage, commentText } = await req.json();

  try {
    await connectToDB();
  
    const forma = await Prompt.findById(params.id);
    if (!forma) {
        return new Response("l'id no trouver", {status:404})
    }

    const newComment = {
      username,
      userImage,
      commentText,
    };
    forma.comments.push(newComment);

    // Sauvegarde de la Forma avec le nouveau commentaire
    await forma.save();
    return new Response("Commentaire ajouté avec succès", {status:200})
   

  } catch (error) {
    console.error('Erreur lors de l\'ajout du commentaire:', error);
    return new Response("Erreur interne au serveur", {status:500})
  }
}

