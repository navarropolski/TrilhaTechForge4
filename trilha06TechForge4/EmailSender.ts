/* class EmailSender {
    sendEmail(contact: string): void {
      if (this.validateContact(contact)) {
        console.log(`Email enviado para ${contact}`);
      } else {
        console.log(`Email inválido: ${contact}`);
      }
    }
  
    private validateContact(contact: string): boolean {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(contact);
    }
  }
  
  const emailSender = new EmailSender();
  emailSender.sendEmail('gaben@valvesoftware.com');
  emailSender.sendEmail('emailinvalido'); */