class ContactValidator {
    validate(contact: string): boolean {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(contact);
    }
  }
  
  class EmailSender {
    private contactValidator: ContactValidator;
  
    constructor(contactValidator: ContactValidator) {
      this.contactValidator = contactValidator;
    }
  
    sendEmail(contact: string): void {
      if (this.contactValidator.validate(contact)) {
        console.log(`Email enviado para ${contact}`);
      } else {
        console.log(`Contato inválido: ${contact}`);
      }
    }
  }
  
  // Testando a versão refatorada
  const contactValidator = new ContactValidator();
  const emailSender = new EmailSender(contactValidator);
  emailSender.sendEmail('gaben@valvesoftware.com');
  emailSender.sendEmail('emailinvalido');