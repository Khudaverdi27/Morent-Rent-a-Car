import { delay, http, HttpResponse } from "msw";
import data from "../data/banner.json";

export const handlers = [
  http.get("https://api.cars.com/banner", async () => {
    await delay(5000);
    return HttpResponse.json(data);
  }),
];
