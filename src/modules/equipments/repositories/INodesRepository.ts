import { ICreateNodeDTO } from '../dtos/ICreateNodeDTO';
import { Node } from '../entities/Node';

interface INodesRepository {
  create(data: ICreateNodeDTO): Promise<void>;
  findById(id: string): Promise<Node | null>;
  findByName(name: string): Promise<Node | null>;
  listByUser(id: string): Promise<Node[]>;
  listByService(id: string): Promise<Node[]>;
}

export { INodesRepository };
