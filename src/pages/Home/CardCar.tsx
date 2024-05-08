import { Card } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function CardCar({ children }: PropsWithChildren) {
  return (
    <Card maxW="sm" boxShadow={"none"}>
      {children}
    </Card>
  );
}

export default CardCar;
