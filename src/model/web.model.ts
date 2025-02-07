export class WebResponse<T> {
  data?: T;
  erorrs?: string;
  paging?: Paging;
}

export class Paging {
  current_page: number;
  total_page: number;
  size: number;
}
