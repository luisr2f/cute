export interface ApiProps {
  isLoading?: boolean;
  error?: string | null;
}


export interface ResultApi {
  count: number,
  items: [];
  resource: string,
  message: string,
  status: string,
  execution: number,
  isSuccess?: boolean,
}


export interface ResultApiPag {
  actualPage: number,
  recordsPerPage: number,
  totalRecords: number,
  totalPages: number,
  outcome: [];
}



export interface ResultApiOur {
  data: [];
  isSuccess: boolean,
  exception?: string,
}
