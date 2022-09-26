export module DynamoTypes {
  
  interface ITable {
    table_name: string
  }

  type propertie_value = { [key: string]: any };

  export interface ICreate extends ITable{
    table_name: string
    items: propertie_value
  }

  export interface IGet extends ITable{
    key: propertie_value
  }


  export interface IDelete extends IGet{
  }

}