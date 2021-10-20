import { HttpResponse } from ".";

// O generics <T> obriga que a classe
// que implemente esta interface, informe o tipo de retorno

export type HttpPostParams<T> = {
  url: string;
  body?: T;
};

export interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}
