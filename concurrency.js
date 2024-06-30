class Concurrency {
  #responses;
  #requests;
  #limit;

  constructor(limit = 5) {
    this.#responses = {};
    this.#requests = [];
    this.#limit = limit;
  }

  async all(requests) {
    this.#requests = requests;

    while (this.#requests.length > 0) {
      if (this.#requests.length < this.#limit) {
        await this.#next(this.#requests.splice(0, this.#requests.length));
      } else {
        await this.#next(this.#requests.splice(0, this.#limit));
      }
    }

    return this.#responses;
  }

  async #next(requests) {
    const allResult = await Promise.allSettled(requests);
    allResult.forEach((res) => {
      const API = res.value.url.split('/').pop();
      this.#responses[`/${API}`] = {
        value: res.value,
        status: res.status,
      };
    });
  }
}
