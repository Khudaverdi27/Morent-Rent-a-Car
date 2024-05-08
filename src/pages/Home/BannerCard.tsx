import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IBannerProps {
  className?: string;
  children: ReactNode;
  bgPattern?: string;
}

function BannerCard({ className, children, bgPattern }: IBannerProps) {
  const bg =
    bgPattern && (bgPattern === "circle" ? "Information.500" : "Primary.500");
  return (
    <Card
      className={className}
      borderRadius={"10px"}
      overflow={"hidden"}
      h="360px"
      w="640px"
      bg={bg}
    >
      {children}
    </Card>
  );
}

export default BannerCard;
