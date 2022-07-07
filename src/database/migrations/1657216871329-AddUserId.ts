import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddUserId1657216871329 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'nodes',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('nodes', 'user_id');
  }
}
