import { ICreateNodeDTO } from '../dtos/ICreateNodeDTO';
import { Node } from '../entities/Node';

interface INodesRepository {
  create(data: ICreateNodeDTO): Promise<void>;
  findById(id: string): Promise<Node | null>;
  findByInverterId(service_id: string, id: string): Promise<Node | null>;
  findByName(name: string, service_id: string): Promise<Node | null>;
  listByUser(id: string): Promise<Node[]>;
  listByService(id: string): Promise<Node[]>;
}

export { INodesRepository };
