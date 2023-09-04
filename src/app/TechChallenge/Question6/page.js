// `app/techchallenge/question6/page.js` is the UI for the `/techchallenge/question6` URL
export default function Page() {
    return <><h1>Question 6: A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.</h1>
    <br></br>
    <p>“Hello Customer, </p>
    <br></br>
    <p>I understand you are creating site and would like for your project to not be indexed by search engines. I can understand that this can be undesirable when first creating a site as it can impact your SEO before the site is live. </p>
    <br></br>
    <p>One thing to note - If your site is already live and you are concerned with your Preview URLs from being indexed by search engines, please do note that on Vercel, all Preview Deployments have the `X-Robots-Tag` HTTP header set to `noindex` by default. This is automatically removed once the Preview is added to production. I just wanted to note that here if this is a concern. You can read more about this in our documentation here: [Preview Deployments Overview](https://vercel.com/docs/deployments/preview-deployments#search-engine-indexing) </p>
    <br></br>
    <p>However, if this is not the case, and you simply want your entire site not indexed, you can accomplish this by adding a `robots.txt` file to the public folder of your root directory with the following: 
`User-Agent: *`
`Disallow: /accounts` </p>
    <br></br>
    <p>You can read more about this in the Vercel documentation here: 
[Learn](https://nextjs.org/learn/seo/crawling-and-indexing/robots-txt) </p>
<br></br>
<p>As always, if you have any further questions or run into any issues, please do reach out to me. </p>
<br></br>
<p>Best Regards,</p>
<p>-Kai"</p></>
  
  }
