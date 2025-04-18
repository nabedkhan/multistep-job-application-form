import OpenAI from "openai";

interface RequestBody {
  content: string;
}

export async function POST(req: Request) {
  try {
    const { content }: RequestBody = await req.json();

    if (!content) {
      return Response.json({ error: "Content is required" }, { status: 400 });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content }]
    });

    return Response.json({ result: completion.choices[0].message }, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return Response.json({ error: "Failed to generate cover letter" }, { status: 500 });
  }
}
