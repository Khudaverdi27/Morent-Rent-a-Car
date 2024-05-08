import { delay, http, HttpResponse } from "msw";
import data from "../data/banner.json";

export const handlers = [
  http.get("https://api.cars.com/banner", async () => {
    await delay(3000);
    return HttpResponse.json(data);
  }),
];
