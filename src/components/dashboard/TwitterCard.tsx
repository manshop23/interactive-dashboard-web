import { Twitter } from "@mui/icons-material"
import { Box, Icon, Stack, Typography } from "@mui/material"
import { FC } from "react"
import { ITwitter } from "../../interfaces/mqtt"

type TwitterProps = {
  twitter: ITwitter
}
const TwitterCard: FC<TwitterProps> = ({ twitter }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ borderTopLeftRadius: 12, borderBottomLeftRadius: 12, backgroundColor: "#E2E2E2", padding: 2 }}>
        <Icon fontSize="large" sx={{ color: "#00acee" }}>
          <Twitter fontSize="large" />
        </Icon>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">{twitter.data.text}</Typography>
      </Box>
    </Stack>
  )
}

export default TwitterCard
