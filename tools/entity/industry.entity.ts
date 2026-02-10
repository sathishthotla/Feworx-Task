import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tool } from "./tools.entity";

@Entity('industry_master')
export class Industry {
  @PrimaryGeneratedColumn()
  industry_id: number;

  @Column({ unique: true })
  industry_name: string;

  @ManyToMany(() => Tool, (tool) => tool.industries)
  tools: Tool[];


}
