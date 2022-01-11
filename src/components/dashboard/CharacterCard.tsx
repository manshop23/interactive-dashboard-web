import { Box, Grid, Typography } from "@mui/material"
import { FC } from "react"
import Image from "mui-image"

type CharacterProps = {
  name: string
  image: string
  feelWeather: string
  feelNews: string
}
const CharacterCard: FC<CharacterProps> = ({ name, image, feelWeather, feelNews }) => {
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
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ padding: 2 }}>
            <Image src={image} duration={0} shiftDuration={0} style={{ borderRadius: 12 }} />
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

// place holder image
