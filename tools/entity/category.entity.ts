import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tool } from "./tools.entity";

@Entity('category_master')
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ unique: true })
  category_name: string;

  @Column()
  description: string;

   @Column()
  business_function: string;

 @OneToMany(() => Tool, (tool) => tool.category)
  tools: Tool[];
}
