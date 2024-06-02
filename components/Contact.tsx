import styled from 'styled-components';

const ContactSection = styled.section``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

const Contact = () => (
  <ContactSection>
    <div className="container">
      <h2>Contact</h2>
      <Form>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <Textarea placeholder="Message" required></Textarea>
        <Button type="submit">Send</Button>
      </Form>
    </div>
  </ContactSection>
);

export default Contact;

