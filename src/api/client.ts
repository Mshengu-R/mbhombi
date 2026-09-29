import * as SecureStore from 'expo-secure-store';
import { API_BASE_URL } from '@/src/constants/config';

const TOKEN_KEY = 'mbhombi_jwt';

export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
  }
}

export async function getToken() {
  return SecureStore.getItemAsync(TOKEN_KEY);
}

export async function saveToken(token: string) {
  await SecureStore.setItemAsync(TOKEN_KEY, token);
}

export async function removeToken() {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = await getToken();
  let response: Response;

 // fetch the API 
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });
  } catch {
    throw new ApiError('Cannot connect to the server. We appologise for the inconveience and our team is currently working on it. Thank you for your patience. Please try again later.');
  }

  // JWt for headers
  const type = response.headers.get('content-type') ?? '';
  const body = response.status === 204
    ? null
    : type.includes('application/json')
      ? await response.json()
      : await response.text();

  if (!response.ok) {

    if (response.status === 401) await removeToken();
    const message = typeof body === 'object' && body
      ? body.message ?? body.error
      : body;
    throw new ApiError(String(message || `Request failed (${response.status}).`), response.status);
  }

  return body as T;
}
