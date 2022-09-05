import { INodesRepository } from '@modules/equipments/repositories/INodesRepository';
import { Node } from '@modules/equipments/entities/Node';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListNodesUseCase {
  constructor(
    @inject('NodesRepository')
    private nodesRepository: INodesRepository
  ) {}

  async execute(service_id: string): Promise<Node[]> {
    const nodes = await this.nodesRepository.listByService(service_id);
    return nodes;
  }
}

export { ListNodesUseCase };
