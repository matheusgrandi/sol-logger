import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateNode1657113333641 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'nodes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'service_id',
            type: 'uuid',
          },
          {
            name: 'inverter_id',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
            default: `'loading inverter data'`,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['on', 'fault', 'off'],
            default: `'on`,
          },
          {
            name: 'last_run',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'Now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('nodes');
  }
}
