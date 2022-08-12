import superagent from "superagent";

export default function BaseRequest({
  url,
  proxy,
  method,
  headers,
  data,
  responseType,
  timeout,
}) {
  return new Promise((resolve, reject) => {
    const request = superagent[method?.toLowerCase() || "get"](url);

    if (responseType) request.responseType(responseType);
    if (data) request.send(data);
    if (headers) request.set(headers);
    if (proxy) request.proxy(proxy);
    if (timeout) request.timeout(timeout);
    if (!timeout) request.timeout(10000);

    request.retry(2);

    request
      .then((response) => {
        try {
          response.data = JSON.parse(response.text);

          resolve(response);
        } catch (error) {
          response.data = response.text;

          resolve(response);
        }
      })
      .catch((error) => reject(error));
  });
}
