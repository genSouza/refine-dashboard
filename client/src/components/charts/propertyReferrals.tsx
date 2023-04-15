import { Box, Typography, Stack } from "@mui/material";
import { propertyReferralsInfo } from "constants/index";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}
const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => {
  return (
    <Box width={"100%"}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography fontSize={16} fontWeight={500} color={"#111422d"}>
          {title}
        </Typography>
        <Typography fontSize={16} fontWeight={500} color={"#111422d"}>
          {percentage}%
        </Typography>
      </Stack>
      <Box
        mt={2}
        position={"relative"}
        width={"100%"}
        height={"8px"}
        borderRadius={1}
        bgcolor={"#e4e5ef"}
      >
        <Box
          width={`${percentage}%`}
          bgcolor={color}
          position={"absolute"}
          height={"100%"}
          borderRadius={1}
        />
      </Box>
    </Box>
  );
};

export const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor={"#fcfcfc"}
      id="chart"
      display={"flex"}
      flexDirection={"column"}
      borderRadius={"15px"}
      minWidth={490}
    >
      <Typography fontSize={"18px"} fontWeight={600} color={"#11142d"}>
        Property Referrals
      </Typography>
      <Stack my={"20px"} direction={"column"} gap={4}>
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </Stack>
    </Box>
  );
};
