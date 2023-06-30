import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10000,
  duration: '20s',
  iterations: 6,
};

export default function () {
    const res = http.get('http://home.takuro.work/');
    sleep(1);
}
