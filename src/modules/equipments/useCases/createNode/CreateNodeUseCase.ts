import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ICreateNodeDTO } from '../../dtos/ICreateNodeDTO';
import { INodesRepository } from '../../repositories/INodesRepository';

@injectable()
class CreateNodeUseCase {
  constructor(
    @inject('NodesRepository') private nodesRepository: INodesRepository
  ) {}
  async execute({
    id,
    user_id,
    service_id,
    inverter_id,
    name,
    description,
  }: ICreateNodeDTO): Promise<void> {
    const nodeAlreadyExists = await this.nodesRepository.findById(id!);
    if (nodeAlreadyExists) {
      throw new AppError('Node already exists!', 401);
    }

    const nameAlreadyInUse = await this.nodesRepository.findByName(name);
    if (nameAlreadyInUse) {
      throw new AppError('Node name already in use!', 401);
    }

    this.nodesRepository.create({
      user_id,
      service_id,
      inverter_id,
      name,
      description,
    });
  }
}

export { CreateNodeUseCase };
