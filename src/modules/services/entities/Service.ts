import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('services')
class Service {
  @PrimaryColumn()
  id?: string;

  @Column()
  user_id: string;

  @Column()
  type: string;

  @Column()
  url: string;

  @Column()
  port: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  ssl: boolean;

  @Column()
  is_active: boolean;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Service };
