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
      <Box
        sx={{
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          backgroundColor: "#E2E2E2",
          padding: 2,
        }}
      >
        <Icon sx={{ fontSize: 48, color: "#00acee", marginTop: "50%" }}>
          <Twitter sx={{ fontSize: 48 }} />
        </Icon>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">{twitter.data.text}</Typography>
      </Box>
    </Stack>
  )
}

export default TwitterCard
