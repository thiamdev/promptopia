// api/prompts/[project]/prompts.js

import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10
  try {
    await connectToDB();
    const prompts = await Prompt.find({})
      .skip((page - 1) * limit)
      .limit(limit);

    return new Response(JSON.stringify(prompts), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control":
          "private, no-cache, no-store, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
