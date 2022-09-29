import {MigrationInterface, QueryRunner} from "typeorm";

export class createTopicsAndQuestions1664234157466 implements MigrationInterface {
    name = 'createTopicsAndQuestions1664234157466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`topics\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`questions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`statement\` varchar(255) NOT NULL, \`answer\` varchar(255) NOT NULL, \`opt_a\` varchar(255) NOT NULL, \`opt_b\` varchar(255) NOT NULL, \`opt_c\` varchar(255) NOT NULL, \`opt_d\` varchar(255) NOT NULL, \`topicId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`questions\` ADD CONSTRAINT \`FK_e5d76861587b8a6472ec7a26c74\` FOREIGN KEY (\`topicId\`) REFERENCES \`topics\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`questions\` DROP FOREIGN KEY \`FK_e5d76861587b8a6472ec7a26c74\``);
        await queryRunner.query(`DROP TABLE \`questions\``);
        await queryRunner.query(`DROP TABLE \`topics\``);
    }

}
