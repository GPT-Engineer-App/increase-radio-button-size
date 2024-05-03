import React from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const Index = () => {
  return (
    <RadioGroup defaultValue="1">
      <Stack direction="row">
        <Radio value="1" sx={{ transform: "scale(1.5)" }}>
          Option 1
        </Radio>
        <Radio value="2" sx={{ transform: "scale(1.5)" }}>
          Option 2
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default Index;
