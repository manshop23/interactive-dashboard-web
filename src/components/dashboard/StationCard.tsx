import { Box, Paper, Typography } from "@mui/material"
import { FC } from "react"
import { IWeather } from "../../interfaces/mqtt"
import CardTitle from "./CardTitle"

type StationProps = {
  station: IWeather
}
const StationCard: FC<StationProps> = ({ station }) => {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CardTitle title={`สถานี: ${station.name}`} />
      </Box>
      <Box sx={{ paddingTop: 2 }}>
        <Box>
          <Typography variant="h6">อุณหภูมิ: {station.data.temp} °C</Typography>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">ความชื้น: {station.data.humid} %</Typography>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">แสง: {station.data.light}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default StationCard
