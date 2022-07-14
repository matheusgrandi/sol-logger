import { inject, injectable } from 'tsyringe';
import { Node } from '../../entities/Node';
import { INodesRepository } from '../../repositories/INodesRepository';

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
