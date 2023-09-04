// `app/techchallenge/question2/page.js` is the UI for the `/techchallenge/question2` URL
export default function Page() {
  return <><h1>Question 2: How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.</h1>
  <br></br>
  <p>Comparing Next.js to Gatsby - I would say Gatsby’s strength is the speed at which you are able to generate a static website. Gatsby utilizes React as its frontend framework, it pre-builds pages during the build process to allow for sites to be rendered quickly. 
Data fetching is GraphQL based which helps remove some of the complexity around querying data from various sources such as APIs & databases.</p>
  <br></br>
  <p>-However, where I have seen Gatsby fall short is with longer term projects or customers who have content that will grow immensely over time. Build time will increase to a frustrating and complex point on Gatsby as the customer's content grows. Stated simply - Gatsby will not scale over time for these customers. This is where Next.js excels.</p>
  <br></br>
  <p>Next.js is React based throughout - “React framework for production”, as some would say. Rendering on Next.js is still extremely fast and data fetching is more configurable, I think, with server-side APIs or React hooks.</p>
  <br></br>
  <p>Over time, I would see a customer who started out building on Gatsby and, as their business needs and development time requirements evolve, eventually wish to move to a Next.js based site.</p>
  <br></br>
  <p>I think, and this is only my observation, is that perhaps some of these customers felt blocked at first starting out on a Next.js site due to a bit of a learning curve. Next.js allows for more control over the build process and data fetching which can require a deeper understanding of the underlying concepts. Gatsby attempts to remove some of that complexity by using declarative data fetching using GraphQL which can help simplify development. But, again, over time a customer can outgrow Gatsby to the point of finding themselves in a position of rebuilding their entire site on Next.js in order to fully meet their business needs.</p></>

}
