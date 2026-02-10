export class CreateToolDto {
  tool_name: string;
  vendor_company_name: string;

  category_id: number;        
  industry_ids: number[];     

  sub_category: string;
  short_description: string;
  key_use_case: string;
  deployment_type: string;
  business_size_fit: string;
  pricing_model: string;
  integration_capability: string;
  website_demo_link: string;
  status: string;
  feature: string;

   category: {
    category_name: string;
    description: string;
    business_function: string;
  };

  industries: {
    industry_name: string;
  }[];
}
