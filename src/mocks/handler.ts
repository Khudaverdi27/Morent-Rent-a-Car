import { http, HttpResponse } from "msw";
import data from "../data/banner.json";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://example.com/user", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(data);
  }),
];
