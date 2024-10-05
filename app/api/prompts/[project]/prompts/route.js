import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    // Connect to the database
    await connectToDB();

    // Get the search parameters from the request URL
    const { searchParams } = new URL(req.url);

    // Extract the page and limit from the query parameters
    const page = parseInt(searchParams.get("page")) || 1; // Default to page 1
    const limit = parseInt(searchParams.get("limit")) || 10; // Default to 10 prompts per page

    // Calculate the number of documents to skip based on the page and limit
    const skip = (page - 1) * limit;

    // Fetch the prompts with pagination
    const prompts = await Prompt.find({})
      .skip(skip)
      .limit(limit);

    // Fetch the total number of prompts for pagination purposes
    const totalPrompts = await Prompt.countDocuments();

    // Return the data along with pagination metadata
    return new Response(
      JSON.stringify({
        prompts,
        totalPages: Math.ceil(totalPrompts / limit),
        currentPage: page,
        totalPrompts,
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
          "cache-control": "private, no-cache, no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
