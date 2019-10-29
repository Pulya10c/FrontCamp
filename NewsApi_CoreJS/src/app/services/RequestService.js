class RequestService {
  getResponse(url, callback) {
      const requestOptions = { method: 'GET' };
      this._asyncLoad({ requestOptions, url, callback });
  }

  async _asyncLoad({ requestOptions, url, callback }) {
    try {
      const res = await fetch(url, requestOptions);
      callback(await res.json());
    } catch (err) {
      console.error(err);
    }
  }
}

export default new RequestService();
