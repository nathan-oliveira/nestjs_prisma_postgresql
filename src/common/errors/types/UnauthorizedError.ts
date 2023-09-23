export class UnauthorizedError extends Error {
  constructor(message = null) {
    super(
      message ??
        'Unauthorized: Você não possui credenciais de autenticação válidas para o recurso solicitado.',
    );
  }
}
