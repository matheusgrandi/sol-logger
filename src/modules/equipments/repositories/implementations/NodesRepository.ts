import { Repository } from 'typeorm';
import { dataSource } from '../../../../database';
import { Node } from '../../entities/Node';
import { INodesRepository } from '../INodesRepository';

class NodesRepository implements INodesRepository {
  private repository: Repository<Node>;
  constructor() {
    this.repository = dataSource.getRepository(Node);
  }
  create(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Node> {
    throw new Error('Method not implemented.');
  }
}
