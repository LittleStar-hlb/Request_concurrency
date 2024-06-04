class Concurrency {
  #responses;
  #requests;
  #limit;

  constructor(requests = [], limit = 5) {
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

  async #next(rqs) {
    const allResult = await Promise.allSettled(rqs.map((r) => r()));
    allResult.forEach((res) => {
      const API = res.value.url.split('/').pop();
      this.#responses[`/${API}`] = {
        result: res,
        status: res.status,
      };
    });
  }
}
