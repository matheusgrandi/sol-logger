import { identitytoolkit } from 'googleapis/build/src/apis/identitytoolkit';
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
    user_id,
    service_id,
    inverter_id,
    name,
    description,
  }: ICreateNodeDTO): Promise<void> {
    const node = this.repository.create({
      id,
      user_id,
      service_id,
      inverter_id,
      name,
      description,
    });

    await this.repository.save(node);
  }
  async findById(id: string): Promise<Node | null> {
    const node =
      id !== (null || undefined)
        ? await this.repository.findOneBy({ id })
        : null;
    return node;
  }

  async findByName(name: string): Promise<Node | null> {
    const node =
      name !== (null || undefined)
        ? await this.repository.findOneBy({ name })
        : null;
    return node;
  }

  async listByUser(id: string): Promise<Node[]> {
    const nodes = await this.repository.find({ where: { user_id: id } });
    return nodes;
  }

  async listByService(id: string): Promise<Node[]> {
    const nodes = await this.repository.find({ where: { service_id: id } });
    return nodes;
  }
}

export { NodesRepository };
