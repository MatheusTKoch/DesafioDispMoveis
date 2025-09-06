# Solidar

**Solidar** é uma plataforma web desenvolvida para conectar voluntários e instituições, facilitando o cadastro, divulgação e inscrição em serviços voluntários. O projeto foi criado para a disciplina de Programação para Dispositivos Móveis.

## Objetivo

Promover o engajamento social, aproximando pessoas interessadas em trabalho voluntário de instituições que precisam de apoio, tornando todo o processo simples, rápido e transparente.

## Principais Funcionalidades

- Cadastro de voluntários e instituições
- Criação e gerenciamento de vagas de serviço voluntário
- Inscrição de voluntários em vagas disponíveis
- Visualização das vagas criadas por cada instituição
- Visualização das vagas em que o voluntário está inscrito
- Envio automático de e-mails de confirmação para voluntários e instituições
- Edição de perfil e dados cadastrais
- Interface responsiva e intuitiva

## Tecnologias Utilizadas

**Backend**
- Node.js
- NestJS
- TypeORM
- PostgreSQL
- Nodemailer (envio de e-mails com templates)

**Frontend**
- Angular
- Ionic
- TypeScript
- RxJS

## Como Funciona

1. **Cadastro:** Voluntários e instituições criam suas contas na plataforma.
2. **Criação de Vagas:** Instituições cadastram vagas detalhando atividades, requisitos e quantidade de vagas.
3. **Inscrição:** Voluntários visualizam vagas abertas e se inscrevem nas oportunidades desejadas.
4. **Confirmação:** Após a inscrição, ambos recebem e-mails automáticos de confirmação.
5. **Gestão:** Instituições acompanham inscrições recebidas e voluntários visualizam suas inscrições.
6. **Edição:** Perfis podem ser atualizados a qualquer momento.

## Como Executar

**Backend**
- Instale as dependências: `npm install`
- Configure o banco de dados no arquivo `.env`
- Inicie o servidor: `npm run start`

**Frontend**
- Instale as dependências: `npm install`
- Inicie o servidor: `ng serve` ou `ionic serve`

**Acesso**
- Abra o navegador em `http://localhost:4200`

## Observações

- Projeto acadêmico, com código modular e pronto para expansão.
- Envio de e-mails utiliza templates personalizados.
- Interface adaptada para dispositivos móveis e desktop.

---

**Desenvolvido para a disciplina de Programação para Dispositivos Móveis**