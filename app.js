import { serve } from "./deps.js";
import { configure, renderFile } from "./deps.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const data = {
  count: 0,
  meaning: "Seeking truths beyond meaning of life, you will find 43.",
  nada: "Nothing here yet",
};

const handleRequest = async (request) => {
    const url = new URL(request.url);

if(url.pathname === "/visits"){

    data.count++;
    return new Response(await renderFile("index.eta", data), responseDetails);

} else if (url.pathname === "/meaning"){

    return new Response("Seeking truths beyond meaning of life, you will find 43.");
}

return new Response("Nothing here yet");

};

serve(handleRequest, { port: 7777 });