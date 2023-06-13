import { connectToDB } from "@utils/database"
import User from "@models/user"


export const POST = async (req, { params }) => {

    const { entreprise, address, ninea, contact } = await req.json();


    try {
        connectToDB()
        const findById = await User.findById(params.id);
        if (!findById) {
            return new Response("l'id no trouver", { status: 404 })
        }
        const newProfil = {
            entreprise,
            address,
            ninea,
            contact
        }

        findById.profil.push(newProfil)
        await findById.save();

        return new Resppnse("les donner ont bien été enrigistré avec succés", { status: 200 })

    } catch (error) {

        return new Response("les donner n'ont pas été envoyer", { status: 404 })
        
    }
}