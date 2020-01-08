class RequestService {
  getResponse(url) {
    const requestOptions = { method: 'GET' };
    return this._asyncLoad({ requestOptions, url });
  }

  async _asyncLoad({ requestOptions, url }) {
    try {
      const res = await fetch(url, requestOptions);
      return await res.json();
    } catch (err) {
      console.error(err);
    }
  }
}

export default new RequestService();
