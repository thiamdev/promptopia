import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const {
    userId,
    username,
    itemToSell,
    propertyType,
    saleType,
    sellerType,
    address,
    description,
    price,
    images,
    image,
    bedrooms,
    bathrooms,
    livingRooms,
    dispo, 
    landSize,
    titleType,
    comments,
  } = await req.json();
  try {
    await connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      username,
      itemToSell,
      propertyType,
      saleType,
      sellerType,
      address,
      description,
      price,
      images,
      image,
      bedrooms,
      bathrooms,
      livingRooms,
      dispo: {
        wifi: dispo.wifi,
        pool: dispo.pool,
        Mountain: dispo.Mountain,
        Beach: dispo.Beach,
        chef: dispo.chef,
        Parking: dispo.Parking,
        camera: dispo.camera,
        Wheelchair: dispo.wheelchair,
        Patio: dispo.Patio,
      },

      landSize,
      titleType,
      comments
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
