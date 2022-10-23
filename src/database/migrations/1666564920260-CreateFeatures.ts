import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateFeatures1666564920260 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'features',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          { name: 'name', type: 'varchar' },
          { name: 'description', type: 'varchar' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('features')
  }
}
