import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('services')
class Service {
  @PrimaryColumn()
  id?: string;

  @Column()
  user_id: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  manufacturer: string;

  @Column()
  endpoint: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  is_active: boolean;

  @Column()
  status: string;

  @CreateDateColumn()
  last_run?: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Service };
