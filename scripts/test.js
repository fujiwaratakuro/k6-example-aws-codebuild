import http from 'k6/http';
import { sleep } from 'k6';

const VUS = 100;
const DURATION = "1s";

export default function () {
    const res = http.get('http://home.takuro.work/');
    sleep(1);
}
