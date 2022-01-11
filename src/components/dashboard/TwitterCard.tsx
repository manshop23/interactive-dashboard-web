import { Twitter } from "@mui/icons-material"
import { Box, Icon, Stack, Typography } from "@mui/material"
import { FunctionComponent } from "react"
import { ITwitter } from "../../interfaces/mqtt"

type TwitterProps = {
  twitter: ITwitter
}
const TwitterCard: FunctionComponent<TwitterProps> = ({ twitter }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 4,
        top: -15,
        position: "relative",
      }}
      minWidth="100%"
    >
      <Stack direction="row" spacing={2}>
        <Box sx={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16, backgroundColor: "#E2E2E2", padding: 2 }}>
          <Icon fontSize="large" sx={{ color: "#00acee" }}>
            <Twitter fontSize="large" />
          </Icon>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">{twitter.data.text}</Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default TwitterCard
