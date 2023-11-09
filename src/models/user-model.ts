export interface UserObject {
    data: Data
    support: Support
  }
  
  export interface Data {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
    salary: number;
  }
  
  export interface Support {
    url: string
    text: string
  }
  