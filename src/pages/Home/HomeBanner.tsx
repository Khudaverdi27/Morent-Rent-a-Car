import { SimpleGrid } from "@chakra-ui/react";
import BannerCard from "./BannerCard";
import { useGetByNameQuery } from "../../services/request";
import { apiResponse } from "../../types/apiResponse";

function Banner() {
  const { data, error, isLoading } = useGetByNameQuery("banner");

  return (
    <SimpleGrid as={"article"} minChildWidth={"250px"} spacing={10}>
      {Array.isArray(data) &&
        data.map((d: apiResponse) => (
          <BannerCard
            isLoading={isLoading}
            key={d.id}
            className={d?.classname}
            title={d.title}
            text={d.text}
            img={d.img}
            bgPattern={d.bgPattern}
          />
        ))}
    </SimpleGrid>
  );
}

export default Banner;
