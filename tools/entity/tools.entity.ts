import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";
import { Industry } from "./industry.entity";

@Entity('tools')
export class Tool {
  @PrimaryGeneratedColumn()
  tool_id: number;

  @Column()
  tool_name: string;

  @Column()
  vendor_company_name: string;

  @Column()
  sub_category: string;

  @Column('text')
  short_description: string;

  @Column('text')
  key_use_case: string;

  @Column()
  deployment_type: string;

  @Column()
  business_size_fit: string;

  @Column()
  pricing_model: string;

  @Column()
  integration_capability: string;

  @Column()
  website_demo_link: string;

  @Column()
  status: string;

  @Column()
  feature: string;



@ManyToOne(() => Category, (category) => category.tools, { cascade: true })
@JoinColumn({ name: 'category_id' })
category: Category;

@ManyToMany(() => Industry, (industry) => industry.tools, { cascade: true })
@JoinTable({
  name: 'tool_industry_map',
  joinColumn: { name: 'tool_id', referencedColumnName: 'tool_id' },
  inverseJoinColumn: { name: 'industry_id', referencedColumnName: 'industry_id' },
})
industries: Industry[];


}


