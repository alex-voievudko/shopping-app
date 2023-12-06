import axios from 'axios';
import { getUrl } from './getApiUrl';

export const api = axios.create({
  baseURL: `${getUrl()}/api`,
});
