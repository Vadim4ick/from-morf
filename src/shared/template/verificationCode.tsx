export function createEmailTemplate(activationCode: string) {
  return `
      <p>Подтвердите регистрацию!</p>  <br />
      <p>Код будет действителен в течение 5 минут.</p> <br />
      Code: <b>${activationCode}</b>
    `;
}
