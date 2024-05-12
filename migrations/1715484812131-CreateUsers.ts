import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1715484812131 implements MigrationInterface {
    name = 'CreateUsers1715484812131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'User ID', \`name\` varchar(255) NOT NULL COMMENT 'User name', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
