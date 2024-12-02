class EmailNotification {
    sendEmail(email: string): void {
      console.log(`Notificação enviada para ${email}`);
    }
  }
  
  class UserManager {
    private emailNotification: EmailNotification;
  
    constructor(emailNotification: EmailNotification) {
      this.emailNotification = emailNotification;
    }
  
    createUser(name: string, email: string): string {
      this.emailNotification.sendEmail(email);
      return `Usuário ${name} criado com sucesso.`;
    }
  }
  
  const emailNotification = new EmailNotification();
  const userManager = new UserManager(emailNotification);
  console.log(userManager.createUser('Mário', 'mario_super@hotmail.com'));
  