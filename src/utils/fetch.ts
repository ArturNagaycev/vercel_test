const BASE_URL = 'https://api.thedogapi.com/v1';

function request<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
