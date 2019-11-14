import { setLoggerForFunc } from '../common/Loggers';

class RequestService {
  factory = (method = 'GET') => {
    switch (method) {
      case 'GET':
        return (url, errorCallback, callback) => {
          const requestOptions = { method: 'GET' };
          this._asyncLoad({ requestOptions, url, errorCallback, callback });
        };

      case 'POST':
        return (url, errorCallback, callback, body = {}) => {
          const requestOptions = { method: 'POST', body };
          this._asyncLoad({ requestOptions, url, errorCallback, callback });
        };

      case 'PUT':
        return (url, errorCallback, callback, body = {}) => {
          const requestOptions = { method: 'PUT', body };
          this._asyncLoad({ requestOptions, url, errorCallback, callback });
        };

      case 'PATCH':
        return (url, errorCallback, callback, body = {}) => {
          const requestOptions = { method: 'PATCH', body };
          this._asyncLoad({ requestOptions, url, errorCallback, callback });
        };

      case 'DELETE':
        return (url, errorCallback, callback, body = {}) => {
          const requestOptions = { method: 'DELETE', body };
          this._asyncLoad({ requestOptions, url, errorCallback, callback });
        };
    }
  };

  _asyncLoad = setLoggerForFunc(async ({ requestOptions, url, errorCallback, callback }) => {
    try {
      const res = await fetch(url, requestOptions);
      res.ok ? callback(await res.json()) : errorCallback(await res.json());
    } catch (err) {
      console.error(err);
      errorCallback(err);
    }
  });
}

export default RequestService;
