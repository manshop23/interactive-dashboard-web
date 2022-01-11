import { Box, Paper, Typography } from "@mui/material"
import { FC } from "react"
import { IWeather } from "../../interfaces/mqtt"

type StationProps = {
  station: IWeather
}
const StationCard: FC<StationProps> = ({ station }) => {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Paper
          sx={{
            backgroundColor: "#383737",
            borderRadius: 2,
            width: 200,
            paddingLeft: 2,
          }}
        >
          <Typography variant="h6" color="white">
            สถานี: {station.name}
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">อุณหภูมิ: {station.data.temp} °C</Typography>
        <Typography variant="h6">ความชื้น: {station.data.humid} %</Typography>
        <Typography variant="h6">แสง: {station.data.light}</Typography>
      </Box>
    </Box>
  )
}

export default StationCard
