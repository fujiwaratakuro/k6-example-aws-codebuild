import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '120s',
  iterations: 1200,
};

export default function () {
    const res = http.get('http://fjwr-nginx-alb-433563759.ap-northeast-1.elb.amazonaws.com/');
    sleep(1);
}
