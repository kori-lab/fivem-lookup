import Request from "./base/Request.js";

export default class Fivem {
  constructor(server) {
    this.url = `http://${this.parseServer(server)}/`;
  }

  async players() {
    const response = await this.baseRequest("players.json");

    return response.data;
  }

  async info() {
    const response = await this.baseRequest("info.json");

    return response.data;
  }

  async ping() {
    const start = Date.now();

    await this.baseRequest("info.json");

    return Date.now() - start;
  }

  baseRequest(endpoint, options = {}) {
    return Request({
      url: this.url + endpoint,
      ...options,
    });
  }

  parseServer(server) {
    if (typeof server == "string") {
      return server.replace(/http:|\//g, "");
    } else if (typeof server == "object") {
      return server.ip + ":" + server.port;
    } else {
      throw new Error("Invalid server type");
    }
  }
}
