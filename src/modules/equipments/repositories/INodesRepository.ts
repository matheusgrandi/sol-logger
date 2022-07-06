import { ICreateNodeDTO } from '../dtos/ICreateNodeDTO';
import { Node } from '../entities/Node';

interface INodesRepository {
  create(data: ICreateNodeDTO): Promise<void>;
  findById(id: string): Promise<Node | null>;
}

export { INodesRepository };
