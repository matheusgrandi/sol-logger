import { Node } from '../entities/Node';

interface INodesRepository {
  create(id: string): Promise<void>;
  findById(id: string): Promise<Node>;
}

export { INodesRepository };
