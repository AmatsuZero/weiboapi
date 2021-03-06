import AMap from '../src';
import {
  GeoRequestConfig,
  RegeoRequestConfig,
} from '../src/Config';
import { GeoLocation } from '../src/Response';

const api = new AMap(process.env.APPKEY);

describe('编码', () => {
  test('地理编码', async () => {
    const config = new GeoRequestConfig();
    config.address = ['方恒国际中心A座'];
    const ret = await api.geo(config);
    expect(ret).not.toBeUndefined();
  });

  test('逆地理编码', async () => {
    try {
      const config = new RegeoRequestConfig();
      const location = new GeoLocation(116.481488, 39.990464);
      config.location = [location];
      config.batch = true;
      config.poitype = '商务写字楼';
      const ret = await api.regeo(config);
      expect(ret).not.toBeUndefined();
    } catch (e) {
      fail(e.message);
    }
  });
});

