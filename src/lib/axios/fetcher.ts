import axios, { AxiosResponse } from 'axios';

export async function fetcher(url: string) {
  return axios.get(url).then((res: AxiosResponse) => res.data);
}
