class Concurrency {
  #responses;
  #requests;
  #limit;

  constructor(requests, limit) {
    this.#responses = {};
    this.#requests = requests;
    this.#limit = limit;
  }

  async execute() {
    while (this.#requests.length > 0) {
      if (this.#requests.length < this.#limit) {
        await this.#next(this.#requests.splice(0, this.#requests.length));
      } else {
        await this.#next(this.#requests.splice(0, this.#limit));
      }
    }

    return this.#responses;
  }

  #next(rqs) {
    return new Promise((resolve, reject) => {
      rqs.forEach((r) => {
        r().then((res) => {
          const API = res.url.split('/').pop();
          this.#responses[`/${API}`] = {
            result: res,
            status: res.status,
          };
          resolve(this.#responses);
        }).catch((err) => {
          const API = err.url.split('/').pop();
          this.#responses[`/${API}`] = {
            result: res,
            status: err.status,
          };
          reject(this.#responses);
        });
      });
    });
  }
}
