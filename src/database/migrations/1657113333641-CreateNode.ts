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
            name: 'drive_id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'string',
            default: 'Loading drive data',
          },
          {
            name: 'description',
            type: 'string',
            isNullable: true,
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

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
