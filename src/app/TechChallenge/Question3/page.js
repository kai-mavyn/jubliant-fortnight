// `app/techchallenge/question3/page.js` is the UI for the `/techchallenge/question3` URL
export default function Page() {
    return <><h1>Question 3: When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h1>
    <br></br>
    <p>To answer this question, there are some discovery questions I would have for a customer that equate to “What would you like to accomplish for your site visitors and Where are these particular site visitors located?” </p>
    <br></br>
    <p>-For instance, if the customer would like to identify the country their site visitor is located and then display the language and currency based on their site visitor’s location, then I would say an Edge Function would be ideal for this task. </p>
    <br></br>
    <p>However, if a customer wishes to have a site visitor authenticate into the site in order to gain access to a member’s only pricing page or maybe submit a form with personal identifying information, then a Serverless Function would be a better route for their use-case. </p>
    <br></br>
    <p>If a customer says they have a security requirement of only allowing certain domains to access their site, then Edge Middleware would be better suited. It would be possible to inspect an incoming request, add appropriate CORS headers, and block any unauthorized cross-origin requests at the edge with Edge Middleware on Vercel.</p></>
  
  }