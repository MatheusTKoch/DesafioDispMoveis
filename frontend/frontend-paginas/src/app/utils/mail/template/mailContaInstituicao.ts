import transporter from '../config/config';

const sendMailCreateInstitution = async (mail: string, name: string) => {
  try {
    const info = await transporter.sendMail({
      from: '"App Desafio Dispositivos Moveis" <desafioprogdispmoveis@gmail.com>',
      to: mail,
      subject: "Cadastro Confirmado - " + name,
      text: `Olá ${name}! Seu cadastro foi confirmado com sucesso.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1>Cadastro Confirmado!</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2>Olá, ${name}!</h2>
            <p>Seu cadastro institucional foi realizado com sucesso em nossa plataforma!</p>

            <div style="background: white; padding: 20px; border-left: 4px solid #4CAF50; margin: 20px 0;">
              <h3>✅ Próximos passos:</h3>
              <ul>
                <li>Acesse sua conta no aplicativo</li>
                <li>Complete seu perfil</li>
                <li>Comece a usar nossos serviços e buscar voluntários!</li>
              </ul>
            </div>

          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>© 2025 App Desafio Dispositivos Móveis</p>
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

export default sendMailCreateInstitution;
