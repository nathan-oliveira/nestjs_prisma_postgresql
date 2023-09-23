export class DatabaseError extends Error {
  constructor(message = null) {
    super(
      message ??
        'DatabaseError: Não foi possível completar a solicitação com o banco de dados.',
    );
  }
}
