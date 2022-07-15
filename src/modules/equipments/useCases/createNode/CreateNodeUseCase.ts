import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ICreateNodeDTO } from '../../dtos/ICreateNodeDTO';
import { INodesRepository } from '../../repositories/INodesRepository';
import { IServicesRepository } from '../../repositories/IServicesRepository';

@injectable()
class CreateNodeUseCase {
  constructor(
    @inject('NodesRepository') private nodesRepository: INodesRepository,
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository
  ) {}
  async execute({
    user_id,
    service_id,
    inverter_id,
    name,
    description,
  }: ICreateNodeDTO): Promise<void> {
    const nameAlreadyInUse = await this.nodesRepository.findByName(
      name,
      service_id
    );
    if (nameAlreadyInUse) {
      throw new AppError('Node name already in use!', 401);
    }

    const serviceBelongsToUser = await this.servicesRepository.findById(
      service_id
    );
    if (serviceBelongsToUser?.user_id !== user_id) {
      throw new AppError("Service doesn't belongs to this user!");
    }
    const inverterIdAlreadyInUse = await this.nodesRepository.findByInverterId(
      service_id,
      inverter_id
    );
    if (inverterIdAlreadyInUse) {
      throw new AppError('Inverter ID already in use!', 401);
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
