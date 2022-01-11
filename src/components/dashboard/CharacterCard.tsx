import { Box, Grid, Typography } from "@mui/material"
import { FC } from "react"

type CharacterProps = {
  name: string
  feelWeather: string
  feelNews: string
}
const CharacterCard: FC<CharacterProps> = ({ name, feelWeather, feelNews }) => {
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
        sx={{
          backgroundColor: "#383737",
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Typography variant="h5" color="white">
          {name}
        </Typography>
      </Box>
    </Box>
  )
}

export default CharacterCard
