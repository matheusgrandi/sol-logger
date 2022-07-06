import { Repository } from 'typeorm';
import { dataSource } from '../../../../database';
import { ICreateNodeDTO } from '../../dtos/ICreateNodeDTO';
import { Node } from '../../entities/Node';
import { INodesRepository } from '../INodesRepository';

class NodesRepository implements INodesRepository {
  private repository: Repository<Node>;
  constructor() {
    this.repository = dataSource.getRepository(Node);
  }
  async create({
    id,
    service_id,
    inverter_id,
    name,
    description,
  }: ICreateNodeDTO): Promise<void> {
    const node = this.repository.create({
      id,
      service_id,
      inverter_id,
      name,
      description,
    });

    await this.repository.save(node);
  }
  findById(id: string): Promise<Node | null> {
    throw new Error('Method not implemented.');
  }
}
