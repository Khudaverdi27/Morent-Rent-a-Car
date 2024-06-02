import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAppSelector } from "../../Redux/hooks/reduxhook";
import { PropsWithChildren } from "react";

const MotionBox = motion(Box);

function CategoriesLayout({ children }: PropsWithChildren) {
  const isOpen = useAppSelector((state) => state.openCategory.value);

  return (
    <MotionBox
      initial={{ x: -360 }}
      animate={{ x: isOpen ? 0 : -360 }}
      transition={{ duration: 0.2 }}
      display={isOpen ? "block" : "none"}
      left={0}
      top={0}
      pt={8}
      pb={5}
      pl={5}
      pr={5}
      bg={"Primary.0"}
      minW={"360px"}
      as="motion.div"
    >
      {children}
    </MotionBox>
  );
}

export default CategoriesLayout;
