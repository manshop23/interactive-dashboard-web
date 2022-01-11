import { Box, Paper, Typography } from "@mui/material"
import { FC } from "react"
import { IPM25 } from "../../interfaces/mqtt"
import CardTitle from "./CardTitle"

type PM25Props = {
  pm25: IPM25
}
const PM25Card: FC<PM25Props> = ({ pm25 }) => {
  const pm25level = () => {
    const value = pm25.data.pm25
    if (value >= 0 && value < 12.1) {
      return {
        color: "#AAD062",
        text: "Good",
      }
    } else if (value < 35.5) {
      return {
        color: "#F8D45D",
        text: "Moderate",
      }
    } else if (value < 55.5) {
      return {
        color: "#FB9A51",
        text: "Unhealthy for sensitive groups",
      }
    } else if (value < 150.5) {
      return {
        color: "#F76669",
        text: "Unhealthy",
      }
    } else if (value < 250.5) {
      return {
        color: "#A57DBB",
        text: "Very Unhealthy",
      }
    } else {
      return {
        color: "#7E2F7E",
        text: "Hazardous",
      }
    }
  }

  const { color, text } = pm25level()
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CardTitle title={`สถานี: ${pm25.name}`} />
      </Box>
      <Box sx={{ paddingTop: 2 }}>
        <Typography variant="h6">PM2.5: {pm25.data.pm25}</Typography>
        <Typography>
          คุณภาพอากาศ:
          <span style={{ marginLeft: 2, color: color }}>{text}</span>
        </Typography>
      </Box>
    </Box>
  )
}

export default PM25Card
