import { Card } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function CardCar({ children }: PropsWithChildren) {
  return (
    <Card
      h={{ base: "340px", sm: "388px" }}
      w={{ base: "auto", sm: "320px" }}
      maxW="sm"
      boxShadow={"none"}
    >
      {children}
    </Card>
  );
}

export default CardCar;
