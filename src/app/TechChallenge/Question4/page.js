// `app/techchallenge/question2/page.js` is the UI for the `/techchallenge/question2` URL
export default function Page() {
	return <><h1>Question 4: A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.</h1>
	<br></br>
	<p>“Hello Customer, 
I understand you would like to have a redirect in place for your `/blog` path to redirect to another website, in this case: `https://mysite.com/newblog` , is that correct? </p>
	<br></br>
	<p>If this is to be for a Next.js site, you can accomplish this by adding redirect to your `next.config.js` file along with the option to make this a permanent redirect or temporary. You can find more details regarding this here in our documentation: 
	https://vercel.com/guides/does-vercel-support-permanent-redirects#in-application-redirects .</p>
	<br></br>
	<p>If your project is not Next.js, you can still use a redirect in your `vercel.json` file with the same option of a permanent or temporary redirect. The details on this can be found here in our documentation: 
	https://vercel.com/guides/does-vercel-support-permanent-redirects#other-redirects</p>
	<br></br>
	<p>Just to note, in some rare cases, it may be necessary to add a custom status code for older HTTP Clients to properly redirect. In these cases, you could use the `statuscode`property instead of the permanent property, but not both. Where you might find this necessary is if you have a customer target base that is restricted to older HTTP clients due to maybe corporate policy and are unable to view the redirect in the previously mentioned methods.</p>
	<br></br>
	<p>As always, if you have any further questions on this or need help deciding, please do reach out to me and I can assist you further. </p>
	<br></br>
	<p>Best Regards,</p>
	<p>-Kai"</p></>
  
  }