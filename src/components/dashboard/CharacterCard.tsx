import { Box, Grid, Typography } from "@mui/material"
import { FunctionComponent } from "react"

type CharacterProps = {
  name: string
  feelWeather: string
  feelNews: string
}
const CharacterCard: FunctionComponent<CharacterProps> = ({ name, feelWeather, feelNews }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 4,
        position: "relative",
      }}
      minWidth="100%"
    >
      <Grid container>
        <Grid item md={4}>
          <Box justifyContent="center" alignItems="center">
            <Typography variant="h6">รูปภาพ 1</Typography>
          </Box>
        </Grid>
        <Grid item md={8} sx={{ marginTop: 4, marginBottom: 4 }}>
          <Box>
            <Typography variant="h6">ความรู้สึกต่อสภาพอากาศ</Typography>
            <Typography variant="h5">{feelWeather}</Typography>
          </Box>
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h6">ความรู้สึกต่อข่าว / สิ่งรอบตัว</Typography>
            <Typography variant="h5">{feelNews}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#383737", borderBottomLeftRadius: 14, borderBottomRightRadius: 14 }}
      >
        <Typography variant="h5" color="white">
          {name}
        </Typography>
      </Box>
    </Box>
  )
}

export default CharacterCard
