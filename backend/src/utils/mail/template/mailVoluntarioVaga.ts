import transporter from '../config/config';

const sendMailCandidate = async (mail: string, nameVolunteer: string, nameVoluntaryService: string, nameInstitution: string) => {
  try {
    const info = await transporter.sendMail({
      from: '"App Desafio Dispositivos Moveis" <desafioprogdispmoveis@gmail.com>',
      to: mail,
      subject: "Cadastro Confirmado para vaga - " + nameVoluntaryService,
      text: `Olá ${nameVolunteer}! Seu cadastro para ${nameVoluntaryService} confirmado com sucesso.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1>Cadastro Confirmado!</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2>Olá, ${nameVolunteer}!</h2>
            <p>Seu cadastro como voluntário foi realizado com sucesso no servico voluntario!</p>

            <div style="background: white; padding: 20px; border-left: 4px solid #4CAF50; margin: 20px 0;">
              <h3>Orientações:</h3>
              <ul>
                <li>A instituição ${nameInstitution} receberá um email com seus dados para poderem entrar em contato</li>
                <li>A partir do contato podem ser organizadas as demais questões como ferramentas, horários entre outros</li>
              </ul>
            </div>

          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>© 2025 Solidar</p>
          </div>
        </div>
      `
    });

    console.log("Message sent:", info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      message: "Email enviado com sucesso!"
    };

  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return {
      success: false,
      error: (error as Error).message,
      message: "Erro ao enviar email"
    };
  }
};

export default sendMailCandidate;
