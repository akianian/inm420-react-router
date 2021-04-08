function ContactForm(props) {
  // When the contact form is submitted, prevent default event and show alert box
  function handleSubmission(e) {
    e.preventDefault();
    alert('Message received. Thank you!');
  }
  return (
    <>
      <p>To contact me, fill out the form below and submit it, please!</p>
      <br />
      <form className="ContactForm" onSubmit={handleSubmission}>
        <label htmlFor="email">Your email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Your message:</label>
        <input type="text" id="message" name="message" required />
        <input type="submit" value="Send" />
      </form>
    </>
  )
}

export default ContactForm;