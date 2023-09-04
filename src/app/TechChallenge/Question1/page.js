// `app/techchallenge/question1/page.js` is the UI for the `/techchallenge/question1` URL
export default function Page() {
    return <><h1>Question 1: Describe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?</h1>
    <br></br>
    <p> My team was tasked with performing full stack migrations from one hosting provider to our own. In some cases, the application or website would perform differently than we or the customer expected after migration. The assumption at the time was that migrating to our platform would solve many of the customer’s performance issues. </p>
    <br></br>
    <p>In order to set proper expectations with our customer and our team, we began running baseline performance metrics prior to migration and post-migration using third party tools. The key was to have error tracing for both front end and back end applications & services. With this information, we then presented each customer with a list of errors or performance issues prior to migrating. This allowed for the customer to either address those issues before migrating to our hosting or to leave them to be addressed at a later time. Either way, this empowered the customer with the information to make a decision that was best for them. </p>
    <br></br>
    <p>Our success criteria was to have either similar or better than post-migration performance metrics for the customer’s application or site. A secondary success was that this method of establishing a baseline performance helped to reduce previously unknown performance variables.</p></>

}