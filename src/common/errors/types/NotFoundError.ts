export class NotFoundError extends Error {
  constructor(message = null) {
    super(
      message ?? 'Not Found: Não foi possível localizar o recurso solicitado.',
    );
  }
}
