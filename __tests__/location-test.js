import AMap from '../src';
import GetIP from '../src/GetIP';
import { IPServiceRequestConfig } from '../src/Config';

const api = new AMap('08e16d6e813d70419d0f59d1379ffbe7');

describe('IP定位', () => {
  test('IP定位（AMap获取IP）', async () => {
    const ret = await api.ip();
    expect(ret).not.toBeNull();
  });

  test('IP定位（自己传递IP）', async () => {
    const ip = await GetIP();
    const config = new IPServiceRequestConfig();
    config.ip = ip;
    const ret = await api.ip(config);
    expect(ret).not.toBeNull();
  });
});
