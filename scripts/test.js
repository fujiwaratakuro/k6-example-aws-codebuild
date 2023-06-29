import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    thresholds: {
        http_req_failed: ["rate<0.01"],
        http_req_duration: ["p(90)<2000"]
    }
}

export default function () {
    const res = http.get('http://home.takuro.work/');
    sleep(1);
}
