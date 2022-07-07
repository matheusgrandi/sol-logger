import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('nodes')
class Node {
  @PrimaryColumn()
  id?: string;

  @Column()
  user_id: string;

  @Column()
  service_id: string;

  @Column()
  inverter_id: string;

  @Column()
  name?: string;

  @Column()
  description?: string;

  @Column()
  status: string;

  @CreateDateColumn()
  last_run?: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Node };
