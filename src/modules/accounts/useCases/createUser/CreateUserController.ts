import { Request, Response } from 'express';

class CreateUserConteller {
  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.body;
  }
}
export { CreateUserConteller };
