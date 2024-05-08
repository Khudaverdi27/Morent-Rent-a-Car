import { delay, http, HttpResponse } from "msw";
import banners from "../data/banner.json";
import carsPopular from "../data/carsPopular.json";
import recommendCars from "../data/carsRecommeds.json";

export const handlers = [
  http.get("https://api.cars.com/banner", async () => {
    await delay(3000);
    return HttpResponse.json(banners);
  }),
  http.get("https://api.cars.com/popularCars", async () => {
    await delay(4000);
    return HttpResponse.json(carsPopular);
  }),
  http.get("https://api.cars.com/recommendCars", async () => {
    await delay(4200);
    return HttpResponse.json(recommendCars);
  }),
];
